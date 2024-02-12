import PropTypes from "prop-types";

const SectionHeading = ({ primary, secondary }) => {
  return (
    <div className="section-heading">
      <h1 className="primary">
        {primary || ""} <span className="secondary">{secondary || ""}</span>{" "}
      </h1>
    </div>
  );
};

SectionHeading.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
};

export default SectionHeading;
