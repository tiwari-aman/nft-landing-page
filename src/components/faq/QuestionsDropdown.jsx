//** Package Imports */
import { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const QuestionsDropdown = ({ data, index }) => {
  //**Props destructuring */
  const { ques, ans } = data;

  //**States */
  const [show, setShow] = useState(false);

  return (
    <div className="question-dropdown">
      <div className="question-wrapper">
        {index !== 0 && <hr className="divider" />}
        <div className="question-container" onClick={() => setShow(!show)}>
          <div className="title">{ques || ""}</div>
          <Icon
            icon="ep:arrow-up"
            width="20 "
            height="20"
            className={classNames("dropdown-arrow", { active: !show })}
          />
        </div>
        {show && <p>{ans || ""}</p>}
      </div>
    </div>
  );
};

QuestionsDropdown.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
};

export default QuestionsDropdown;
