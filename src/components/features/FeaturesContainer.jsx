import SectionHeading from "../common/SectionHeading";
import FeaturesListing from "./FeaturesListing";

const FeaturesContainer = () => {
  return (
    <div className="features-section">
      <SectionHeading primary={"How it"} secondary={"works!"} />
      <FeaturesListing />
    </div>
  );
};

export default FeaturesContainer;
