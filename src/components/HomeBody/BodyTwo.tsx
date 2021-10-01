import { Link } from "react-router-dom";

import DevActivity from "../../public/developerActivity.svg";
import Wallet from "../../public/wallet.svg";
import MakingArt from "../../public/makingArt.svg";
import "./index.css";

export const BodyTwo = () => {
  return (
    <div className="bodyTwAll">
      <h1>Resources for getting started</h1>
      <div className="bodyTwBody">
        <Link to="/about/blog/how-to-make-money">
          <div className="bodyTwCont">
            <img src={Wallet} />
            <p>How to make money on GrowthGate</p>
          </div>
        </Link>
        <Link to="/about/blog/implementation-of-machine">
          <div className="bodyTwCont">
            <img src={DevActivity} />
            <p>How to implement your machine on your own website</p>
          </div>
        </Link>
        <Link to="/about/blog/how-to-make-money">
          <div className="bodyTwCont">
            <img src={MakingArt} />
            <p>The beginner's guide to creating and selling digital art NFTs</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
