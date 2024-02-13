//** Package Imports */
import PropTypes from "prop-types";

//** File Imports */
import SectionDivider from "./SectionDivider";
import AnimationWrapper from "./AnimationWrapper";



const SectionWrapper = ({ children, id }) => {

  return (
    <AnimationWrapper>
      <section className="container" id={id} >
        {children}
        <SectionDivider />
      </section>
     </AnimationWrapper>
  );
};

SectionWrapper.propTypes = {
  children: PropTypes.element,
  id: PropTypes.string,
};

export default SectionWrapper;
