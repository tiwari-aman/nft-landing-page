//** Package Imports */
import PropTypes from "prop-types";

//** File Imports */
import SectionDivider from "./SectionDivider";

const SectionWrapper = ({ children, id }) => {
  return (
    <section className="container" id={id}>
      {children}
      <SectionDivider />
    </section>
  );
};

SectionWrapper.propTypes = {
  children: PropTypes.element,
  id: PropTypes.string,
};

export default SectionWrapper;
