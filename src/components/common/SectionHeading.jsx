import React from "react";

const SectionHeading = ({primary, secondary}) => {
  return (
    <div className="section-heading">
      <h1 className="primary">
        {primary || "" } <span className="secondary">{secondary || ""}</span>{" "}
      </h1>
    </div>
  );
};

export default SectionHeading;
