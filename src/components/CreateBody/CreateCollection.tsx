import React from "react";
import { PlusCircleFilled, MinusCircleFilled } from "@ant-design/icons";

import { TopLevel, Attribute } from "./index";
import "./index.css";

export const CreateCollection = ({
  setView,
  setTopLevel,
  topLevel,
}: {
  setView: React.Dispatch<React.SetStateAction<string>>;
  setTopLevel: React.Dispatch<React.SetStateAction<TopLevel>>;
  topLevel: TopLevel;
}) => {
  return (
    <>
      <div className="title">
        <h1>Create Collection</h1>
        <button onClick={() => setView("default")}>Go Back</button>
      </div>
      <div className="body">
        <div className="input">
          <label>Collection Name*</label>
          <input
            placeholder="NFT Project to the Moon!"
            onChange={(e) =>
              setTopLevel({ ...topLevel, collectionName: e.target.value })
            }
          />
        </div>
        <div className="input">
          <label>Family Name*</label>
          <input
            placeholder="To the Moon Family"
            onChange={(e) =>
              setTopLevel({ ...topLevel, familyName: e.target.value })
            }
          />
        </div>
        <div className="input">
          <label>Seller Fee (in basis points)</label>
          <input
            placeholder="500"
            onChange={(e) => {
              const value = +e.target.value;
              setTopLevel({ ...topLevel, sellerFee: value });
            }}
          />
        </div>
        <div className="input">
          <label>Default Description (not required)</label>
          <input
            placeholder="The dopest NFT project on the internet."
            onChange={(e) =>
              setTopLevel({
                ...topLevel,
                defaultDescription: e.target.value,
              })
            }
          />
        </div>
        <div className="input">
          <label>Default Property Names (not required)</label>
          {topLevel.defaultAttributes.map((attribute, i) => (
            <>
              <input
                placeholder="Background Color"
                onChange={(e) =>
                  setTopLevel({
                    ...topLevel,
                    defaultAttributes: [
                      ...topLevel.defaultAttributes.slice(0, i),
                      { trait_type: e.target.value, value: "" },
                      ...topLevel.defaultAttributes.slice(i + 1),
                    ],
                  })
                }
              />
            </>
          ))}
          <div>
            <MinusCircleFilled
              className="plusCircle"
              onClick={() => {
                const index = topLevel.defaultAttributes.length - 1;
                let newAttributes: Attribute[] = [
                  ...topLevel.defaultAttributes,
                ];
                newAttributes.splice(index, 1);
                setTopLevel({
                  ...topLevel,
                  defaultAttributes: newAttributes,
                });
              }}
            />
            <PlusCircleFilled
              className="plusCircle"
              onClick={() => {
                setTopLevel({
                  ...topLevel,
                  defaultAttributes: [
                    ...topLevel.defaultAttributes,
                    { trait_type: "", value: "" },
                  ],
                });
              }}
            />
          </div>
        </div>
        <button className="nextButton" onClick={() => setView("uploadTwo")}>
          Next
        </button>
      </div>
    </>
  );
};
