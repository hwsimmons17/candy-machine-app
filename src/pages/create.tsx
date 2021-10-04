import { CreateBody } from "../components/CreateBody";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Navbar/Footer";

import "./index.css";

const Create = () => {
  return (
    <div className="all">
      <Navbar />
      <CreateBody />
    </div>
  );
};

export default Create;
