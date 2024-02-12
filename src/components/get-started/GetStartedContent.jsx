import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";

const GetStartedContent = () => {
  return (
    <div className="get-started-content">
      <SectionHeading primary={"Let's start"} />
      <SectionHeading secondary={"minting"} />
      <p className="desc">Invest and manage all your NFTs at one place.</p>
      <Button label={"Get started"} />
    </div>
  );
};

export default GetStartedContent;
