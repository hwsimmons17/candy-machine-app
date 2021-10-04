import React from "react";
import ImageUploader from "react-images-upload";

import { TopLevel } from ".";
import { Upload } from ".";
import "./index.css";

export const EditImages = ({
  setTopLevel,
  topLevel,
  setView,
  upload,
  setUpload,
  images,
  setImages,
  handleUpload,
}: {
  setView: React.Dispatch<React.SetStateAction<string>>;
  setTopLevel: React.Dispatch<React.SetStateAction<TopLevel>>;
  topLevel: TopLevel;
  setUpload: React.Dispatch<React.SetStateAction<Upload[]>>;
  upload: Upload[];
  images: File[];
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
  handleUpload: any;
}) => {
  return (
    <>
      <div className="title">
        <h1>Create Collection</h1>
        <button onClick={() => setView("uploadOne")}>Go Back</button>
      </div>
      <div className="body">
        <div className="input">
          <ImageUploader
            withIcon={true}
            buttonText={upload.length > 0 ? "Change Images" : "Upload Images"}
            onChange={handleUpload}
            imgExtension={[".png"]}
            maxFileSize={52428800}
            label="Max file size: 5mb, accepted: png"
          />
        </div>
        <div className="images">
          {upload.length == images.length &&
            images.map((image, i) => (
              <div key={image.name} className="loadedImg">
                <img src={URL.createObjectURL(image)} />
                <label>Name*</label>
                <input value={upload[i].name.toString()} />
                <label>Description*</label>
                <input value={upload[i].description.toString()} />
                <div>
                  <p>Attributes</p>
                  {upload[i].attributes.map((attribute) => (
                    <>
                      <label>Trait Type</label>
                      <input value={attribute.trait_type} />
                      <label>Value</label>
                      <input value={attribute.value} />
                    </>
                  ))}
                  <button>+</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
