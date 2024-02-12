import React from "react";
import SectionDivider from "./SectionDivider";

const SectionWrapper = ({ children, id }) => {
  return (
    <section className="container" id={id}>
      {children}
      <SectionDivider />
    </section>
  );
};

export default SectionWrapper;
