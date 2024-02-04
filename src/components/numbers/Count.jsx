import React from "react";

const Count = ({ heading, subHeading }) => {
  return (
    <div className="count-content">
      <h1>{heading || ""}</h1>
      <p>{subHeading || ""}</p>
    </div>
  );
};

export default Count;
