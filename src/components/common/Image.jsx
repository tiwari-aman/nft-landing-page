//** Package Imports */
import PropTypes from "prop-types";

const Image = ({ className, src, width, height, ...rest }) => {
  return (
    <>
      <img
        className={className || ""}
        src={src || ""}
        alt=""
        width={width}
        height={height}
        {...rest}
      />
    </>
  );
};

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Image;
