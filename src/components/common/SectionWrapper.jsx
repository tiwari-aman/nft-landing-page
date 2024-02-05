import React from "react";
import SectionDivider from "./SectionDivider";

const SectionWrapper = ({ children }) => {
  return (
    <section className="container">
      {children}
      <SectionDivider />
    </section>
  );
};

export default SectionWrapper;
