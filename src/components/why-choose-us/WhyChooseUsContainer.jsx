//** File Imports */
import SectionHeading from "../common/SectionHeading";
import QualityCardContainer from "./QualityCardContainer";

const WhyChooseUsContainer = () => {
  return (
    <div className="choose-us-section">
      <SectionHeading primary={"Why"} secondary={`choose us?`} />
      <QualityCardContainer />
    </div>
  );
};

export default WhyChooseUsContainer;
