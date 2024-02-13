//** React Imports */
import { useEffect } from "react";
import Aos from "aos";

//** File Imports */
import AvatarRating from "./AvatarRating";
import Button from "../common/Button";
import heroImg from "../../assets/images/pages/hero-section-image.svg";

const HeroSection = () => {
  useEffect(() => {
    Aos.init({
      startEvent: "DOMContentLoaded",
    });
  }, []);

  return (
    <div
      className="hero-section container"
      id="Home"
      data-aos="fade"
      data-aos-offset="500"
      data-aos-once="false"
      data-aos-duration="2000"
    >
      <div className="hero-content">
        <h1>High Quality NFT Collection</h1>
        <p>
          A 890 piece custom Nfthub&apos;s collection is joining the NFT space
          on Opensea.
        </p>
        <Button label={"View in OPENSEA"} />
        <AvatarRating />
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="hero" />
      </div>
    </div>
  );
};

export default HeroSection;
