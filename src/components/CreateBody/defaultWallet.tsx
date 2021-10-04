import React from "react";
import "./index.css";

export const DefaultWallet = ({
  setView,
}: {
  setView: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <>
      <div className="title">
        <h1>Edit Collections</h1>
        <button onClick={() => setView("uploadOne")}>
          Upload new Collection
        </button>
      </div>
      <div className="body">
        <div className="noCollection">You have created no collections</div>
      </div>
    </>
  );
};
