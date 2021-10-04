import { useState, useEffect } from "react";
import { useAnchorWallet } from "@solana/wallet-adapter-react";

import "./index.css";
import { DefaultNoWallet } from "./defaultNoWallet";
import { DefaultWallet } from "./defaultWallet";
import { CreateCollection } from "./CreateCollection";
import { EditImages } from "./EditImages";

export interface Upload {
  name: String;
  symbol: String;
  description: String;
  seller_fee_basis_points: Number;
  image: String;
  animation_url: String;
  external_url: String;
  attributes: Attribute[];
  collection: {
    name: String;
    family: String;
  };
  properties: {
    files: [
      {
        uri: String;
        type: String;
      }
    ];
    category: String;
    creators: [
      {
        address: String;
        share: Number;
      }
    ];
  };
}

export interface Attribute {
  trait_type: string;
  value: string;
}

export interface TopLevel {
  collectionName: string;
  familyName: string;
  sellerFee: number;
  defaultDescription: string;
  defaultAttributes: Attribute[];
}

export const CreateBody = () => {
  const wallet = useAnchorWallet();
  const [view, setView] = useState("default");
  const [images, setImages] = useState<File[]>([]);
  const [upload, setUpload] = useState<Upload[]>([]);
  const [topLevel, setTopLevel] = useState<TopLevel>({
    collectionName: "",
    familyName: "",
    sellerFee: 500,
    defaultDescription: "",
    defaultAttributes: [],
  });

  useEffect(() => {
    for (let i = 0; i < images.length; i++) {
      setUpload((prevState) => [
        ...prevState,
        {
          name: `${topLevel.collectionName} #${i + 1}`,
          symbol: "",
          description: topLevel.defaultDescription,
          seller_fee_basis_points: topLevel.sellerFee,
          image: "image.png",
          animation_url: "",
          external_url: "",
          attributes: topLevel.defaultAttributes,
          collection: {
            name: topLevel.collectionName,
            family: topLevel.familyName,
          },
          properties: {
            files: [
              {
                uri: "image.png",
                type: "image/png",
              },
            ],
            category: "image",
            creators: [
              {
                address: wallet?.publicKey.toBase58()!,
                share: 100,
              },
            ],
          },
        },
      ]);
    }
    console.log(upload);
  }, [images]);

  const handleUpload = (e: File[]) => {
    console.log(e);
    setImages(e);
  };

  return (
    <div className="allB">
      {!wallet && <DefaultNoWallet />}
      {view === "default" && wallet && <DefaultWallet setView={setView} />}
      {view === "uploadOne" && wallet && (
        <>
          <CreateCollection
            topLevel={topLevel}
            setTopLevel={setTopLevel}
            setView={setView}
          />
        </>
      )}
      {view === "uploadTwo" && wallet && (
        <>
          <EditImages
            topLevel={topLevel}
            setTopLevel={setTopLevel}
            setView={setView}
            upload={upload}
            setUpload={setUpload}
            images={images}
            setImages={setImages}
            handleUpload={handleUpload}
          />
        </>
      )}
    </div>
  );
};
