//** Package Imports */
import PropTypes from "prop-types";

const MapThrough = ({ data, RenderComponent, ...rest }) => {
  /**
   * Check if 'data' is not an array or if 'RenderComponent' is a function. If either condition is true, throw an error with the message "Invalid props passed".
   */
  if (!Array.isArray(data) || typeof RenderComponent !== "function") {
    throw new Error("Invalid props passed");
  }

  return (
    <>
      {data.map((item, index) => (
        <RenderComponent key={index} data={item} index={index} {...rest} />
      ))}
    </>
  );
};

MapThrough.propTypes = {
  data: PropTypes.array,
  RenderComponent: PropTypes.any,
  additionalProps: PropTypes.any,
};

export default MapThrough;
