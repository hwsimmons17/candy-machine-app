import { Link } from "react-router-dom";

import "./index.css";
import Sculpting from "../../public/sculpting.svg";

export const Hero = () => {
  return (
    <div className="heroAll">
      <div className="heroBody">
        <h1>How to use GrowthGate's tools</h1>
        <div className="heroBtns">
          <Link to="/gallery">
            <button className="pBtn">Explore</button>
          </Link>
          <Link to="/create">
            <button className="sBtn">Create</button>
          </Link>
        </div>
      </div>
      <img src={Sculpting} className="heroImg" />
    </div>
  );
};
