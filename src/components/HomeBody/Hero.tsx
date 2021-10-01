import { Link } from "react-router-dom";

import "./index.css";
import Artist from "../../public/artist.svg";

export const Hero = () => {
  return (
    <div className="heroAll">
      <div className="heroBody">
        <h1>Purchase exclusive NFTs or create your own minting machine!</h1>
        <div className="heroBtns">
          <Link to="/gallery">
            <button className="pBtn">Explore</button>
          </Link>
          <Link to="/create">
            <button className="sBtn">Create</button>
          </Link>
        </div>
      </div>
      <img src={Artist} className="heroImg" />
    </div>
  );
};
