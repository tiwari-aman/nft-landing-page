import SectionHeading from "../common/SectionHeading";
import CollectionSlider from "./CollectionSlider";
import Button from '../common/Button'
import SectionDivider from "../common/SectionDivider";

const CollectionWrapper = () => {
  return (
    <div className="collection-wrapper">
      <SectionHeading primary={"Nfthub's"} secondary={"Collection"} />
      <CollectionSlider />
      <div className="button-container">
      <Button label={"View Collection"} />
      </div>
      <SectionDivider />
    </div>
  );
};

export default CollectionWrapper;
