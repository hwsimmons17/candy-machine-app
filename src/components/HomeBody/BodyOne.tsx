import { Link } from "react-router-dom";
import {
  WalletTwoTone,
  AppstoreTwoTone,
  FundTwoTone,
  ShopTwoTone,
} from "@ant-design/icons";

import "./index.css";

export const BodyOne = () => {
  return (
    <div className="bodyOAll">
      <div className="bodyODiv">
        <WalletTwoTone twoToneColor="#8F4AF6" className="bodyOLogo" />
        <h1>Set up your wallet</h1>
        <p>
          Once you've set up your wallet of choice, connect it to GrowthGate by
          clicking the select wallet button in the top right corner. Learn about
          the <Link to="/about/wallets">wallets we support.</Link>
        </p>
      </div>
      <div className="bodyODiv">
        <AppstoreTwoTone twoToneColor="#8F4AF6" className="bodyOLogo" />
        <h1>Create your collection</h1>
        <p>
          Click <Link to="/create">Create</Link> and set up your collection. Add
          social links, a description, profile and banner images and set up a
          secondary sales fee.
        </p>
      </div>
      <div className="bodyODiv">
        <FundTwoTone twoToneColor="#8F4AF6" className="bodyOLogo" />
        <h1>Add your NFTs</h1>
        <p>
          Upload your images, add a title and description, and customize your
          NFTs with properties and traits.
        </p>
      </div>
      <div className="bodyODiv">
        <ShopTwoTone twoToneColor="#8F4AF6" className="bodyOLogo" />
        <h1>List your Machine</h1>
        <p>
          Create your own NFT minting machine. You choose how you want to sell
          your NFTs. You can either sell them on GrowthGate or set up the store
          on your own website.
        </p>
      </div>
    </div>
  );
};
