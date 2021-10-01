import { Link } from "react-router-dom";

import "./index.css";

export const Footer = () => {
  return (
    <div className="fAll">
      <div className="fBody">
        <div className="fLeft">
          <h1>GrowthGate NFTs</h1>
          <p>
            The world's first easy to use implementation of the candy machine
            developed by Metaplex
          </p>
        </div>
        <div className="fRight">
          <div className="fColumn">
            <h1>Marketplace</h1>
            <Link to="/gallery">All NFTs</Link>
            <Link to="/gallery">New</Link>
            <Link to="/gallery">Art</Link>
            <Link to="/gallery">Community</Link>
          </div>
          <div className="fColumn">
            <h1>About</h1>
            <Link to="/about">Help Center</Link>
            <Link to="/about/blog">Blog</Link>
            <Link to="/about">Docs</Link>
            <Link to="/about">Newsletter</Link>
          </div>
          <div className="fColumn">
            <h1>Social Media</h1>
            <Link to="/about">Twitter</Link>
            <Link to="/about">Facebook</Link>
            <Link to="/about">Discord</Link>
          </div>
        </div>
      </div>
      <div className="fBottom">&#169; 2021 GrowthGate</div>
    </div>
  );
};
