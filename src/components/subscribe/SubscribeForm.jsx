//** File Imports */
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";

const SubscribeForm = () => {
  return (
    <>
    <div className="subscribe-form">
      <SectionHeading primary={"Never"} secondary={"miss a drop!"} />
      <p className="desc">
        Subscribe to our super-rare and exclusive drops & collectibles.
      </p>
      <div className="form-input">
        <input
          className="input-field"
          type="text"
          placeholder="Enter your email"
        />
        <Button label={"Subscribe"} noArrow={true}/>
      </div>
    </div>
    </>
  );
};

export default SubscribeForm;
