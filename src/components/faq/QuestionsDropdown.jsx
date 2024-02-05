import { useState } from "react";
import arrow from "../../assets/images/icons/arrow-up-down.svg";

const QuestionsDropdown = ({ data, index }) => {
  const { ques, ans } = data;

  const [show, setShow] = useState(false);

  return (
    <div className="question-dropdown">
      <div className="question-wrapper">
        {index !== 0 && <hr className="divider" />}
        <div className="question-container" onClick={() => setShow(!show)}>
          <div className="title">{ques || ""}</div>
          <img
            className={show ? "dropdown-arrow active" : "dropdown-arrow"}
            src={arrow}
            alt="arrow"
          />
        </div>
        {show && <p>{ans || ""}</p>}
      </div>
    </div>
  );
};

export default QuestionsDropdown;
