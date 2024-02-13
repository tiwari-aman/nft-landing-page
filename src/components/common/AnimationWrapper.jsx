//** React Imports */
import React, { useEffect } from "react";
//** Package Imports */
import Aos from "aos";
import PropTypes from "prop-types";
import "aos/dist/aos.css";

const Children = ({ children, ...props }) => {
  return React.cloneElement(children, { ...props });
};

const AnimationWrapper = ({ children }) => {
  useEffect(() => {
    Aos.init({
      startEvent: "DOMContentLoaded",
    });
  }, []);

  return (
    <>
      {" "}
      <Children
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-duration="1000"
        {...{ children }}
      />
    </>
  );
};

AnimationWrapper.propTypes = {
  children: PropTypes.element,
};

export default AnimationWrapper;
