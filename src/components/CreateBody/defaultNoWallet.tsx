import "./index.css";

export const DefaultNoWallet = () => {
  return (
    <>
      <div className="title">
        <h1>Edit Collections</h1>
        <button className="disabled">Upload new Collection</button>
      </div>
      <div className="body">
        <div className="noCollection">Please Connect Your Wallet</div>
      </div>
    </>
  );
};
