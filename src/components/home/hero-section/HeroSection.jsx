import Button from "../../common/Button";
import AvatarRating from "./AvatarRating";
import heroImg from "../../../assets/images/pages/hero-section-image.svg";

const HeroSection = () => {
  return (
    <section className="hero-section container">
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
    </section>
  );
};

export default HeroSection;
