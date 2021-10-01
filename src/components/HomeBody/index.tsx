import { Hero } from "./Hero";
import { BodyOne } from "./BodyOne";
import "./index.css";
import { BodyTwo } from "./BodyTwo";

export const HomeBody = () => {
  return (
    <div className="allB">
      <Hero />
      <BodyOne />
      <BodyTwo />
    </div>
  );
};
