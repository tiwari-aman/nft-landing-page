//** File Imports */
import Button from "../common/Button";
import CollectionSlider from "./CollectionSlider";
import SectionHeading from "../common/SectionHeading";

const CollectionWrapper = () => {
  return (
    <div className="collection-wrapper">
      <SectionHeading primary={"Nfthub's"} secondary={"Collection"} />
      <CollectionSlider />
      <div className="button-container">
        <Button label={"View Collection"} />
      </div>
    </div>
  );
};

export default CollectionWrapper;
