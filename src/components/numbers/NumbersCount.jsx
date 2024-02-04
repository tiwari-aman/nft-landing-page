import React from "react";
import Count from "./Count";

const NumbersCount = () => {
  return (
    <div className="number-section">
      <Count heading={"400k+"} subHeading={"Wallets Connected"} />
      <Count heading={"20k+"} subHeading={"Wallets Connected"} />
      <Count heading={"230k+"} subHeading={"Creative artists"} />
      <Count heading={"2.5x"} subHeading={"Estimated Value"} />
    </div>
  );
};

export default NumbersCount;
