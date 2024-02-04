import React from "react";
import SectionHeading from "../common/SectionHeading";
import QualityCardContainer from "./QualityCardContainer";
import SectionDivider from '../common/SectionDivider'

const WhyChooseUsContainer = () => {
  return (
    <div className="choose-us-section">
      <SectionHeading primary={"Why"} secondary={"choose us?"} />
      <QualityCardContainer />
      <SectionDivider />
    </div>
  );
};

export default WhyChooseUsContainer;
