import { AboutBody } from "../components/AboutBody";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Navbar/Footer";

import "./index.css";

const About = () => {
  return (
    <div className="all">
      <Navbar />
      <AboutBody />
      <Footer />
    </div>
  );
};

export default About;
