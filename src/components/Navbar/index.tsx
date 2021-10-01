import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  MenuOutlined as Menu,
  CloseOutlined as Close,
  UserOutlined as User,
} from "@ant-design/icons";

import "./index.css";

import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  console.log(location);
  console.log(location.pathname);
  let path = location.pathname.match(/[a-zA-Z0-9]+/);
  console.log(path);
  let active = "home";
  if (path) active = path![0];
  return (
    <div className="navAll">
      <Link to="/">
        <div className="logo">GrowthGate NFT</div>
      </Link>
      <div className="rightDiv">
        <Link to="/">
          <div className={active === "home" ? "link linkActive" : "link"}>
            Home
          </div>
        </Link>
        <Link to="/gallery">
          <div className={active === "gallery" ? "link linkActive" : "link"}>
            Gallery
          </div>
        </Link>
        <Link to="/about">
          <div className={active === "about" ? "link linkActive" : "link"}>
            About
          </div>
        </Link>
        <Link to="/create">
          <div className={active === "create" ? "link linkActive" : "link"}>
            Create
          </div>
        </Link>
        <WalletMultiButton />
      </div>
      {open ? (
        <div className="burger">
          <Close style={{ fontSize: "3em" }} onClick={() => setOpen(false)} />
        </div>
      ) : (
        <div className="burger">
          <Menu style={{ fontSize: "3em" }} onClick={() => setOpen(true)} />
        </div>
      )}
      {open && (
        <div className="overland">
          <Link to="/">
            <div>Home</div>
          </Link>
          <Link to="/about">
            <div>About</div>
          </Link>
          <Link to="/gallery">
            <div>Gallery</div>
          </Link>
          <Link to="/auction">
            <div>Purchase</div>
          </Link>
          <div>
            <WalletMultiButton />
          </div>
        </div>
      )}
    </div>
  );
};
