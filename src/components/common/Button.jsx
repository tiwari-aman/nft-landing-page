import { Icon } from "@iconify/react";

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

export default Button;
