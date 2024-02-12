//** Package Imports */
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";

const Button = ({ label, noArrow }) => {
  return (
    <button className="primary-btn">
      {label || ""}
      {noArrow ? (
        <></>
      ) : (
        <Icon
          icon="material-symbols:arrow-insert"
          className="btn-arrow"
          alt="arrow"
          width={25}
          height={25}
        />
      )}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  noArrow: PropTypes.bool,
};

export default Button;
