//** Package Imports */
import PropTypes from "prop-types";

//** File Imports */
import arrowRight from "../../assets/images/icons/next.svg";

const SliderArrow = (props) => {
  const { className, style, onClick, dir } = props;

  return (
    <>
      {dir === "next" ? (
        <img
          src={arrowRight}
          alt="arrow"
          className={className}
          style={{
            ...style,
            display: "block",
            width: 40,
            height: 40,
            right: "0px ",
            top: "45%",
          }}
          onClick={onClick}
        />
      ) : (
        <img
          src={arrowRight}
          alt="arrow"
          className={className}
          style={{
            ...style,
            display: "block",
            width: 40,
            height: 40,
            transform: "rotate(180deg)",
            zIndex: 100,
            left: "0px",
            top: "40%",
          }}
          onClick={onClick}
        />
      )}
    </>
  );
};

SliderArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  dir: PropTypes.string,
};

export default SliderArrow;
