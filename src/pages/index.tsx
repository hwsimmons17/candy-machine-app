import { HomeBody } from "../components/HomeBody";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Navbar/Footer";

import "./index.css";

const Home = () => {
  return (
    <div className="all">
      <Navbar />
      <HomeBody />
      <Footer />
    </div>
  );
};

export default Home;
