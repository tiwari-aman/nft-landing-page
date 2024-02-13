//** Package Imports */
import PropTypes from "prop-types";

const Count = ({ heading, subHeading }) => {
  return (
    <div className="count-content">
      <h1>{heading || ""}</h1>
      <p>{subHeading || ""}</p>
    </div>
  );
};

Count.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};

export default Count;
