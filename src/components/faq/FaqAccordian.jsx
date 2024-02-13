//** File Imports */
import { faqQuesAnsArr } from "../../constants/constants";
import QuestionsDropdown from "./QuestionsDropdown";
import MapThrough from "../common/MapThrough";

const FaqAccordian = () => {
  return (
    <div className="faq-accordian">
      <MapThrough data={faqQuesAnsArr} RenderComponent={QuestionsDropdown} />
    </div>
  );
};

export default FaqAccordian;
