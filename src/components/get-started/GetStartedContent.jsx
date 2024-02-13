//** Files Imports */
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import AnimationWrapper from "../common/AnimationWrapper";

const GetStartedContent = () => {
  return (
    <AnimationWrapper>
      <div className="get-started-content">
        <SectionHeading primary={"Let's start"} />
        <SectionHeading secondary={"minting"} />
        <p className="desc">Invest and manage all your NFTs at one place.</p>
        <Button label={"Get started"} />
      </div>
     </AnimationWrapper>
  );
};

export default GetStartedContent;
