import SectionHeading from "../common/SectionHeading";
import FaqAccordian from "./FaqAccordian";

const FaqQuestions = () => {
  return (
    <div className="faq-section">
      <SectionHeading primary={"Your questions,"} />
      <SectionHeading secondary={"answered!"} />
      <FaqAccordian />
    </div>
  );
};

export default FaqQuestions;
