//** File Imports */
import SectionHeading from "../common/SectionHeading";
import ArtistProfiles from "./ArtistProfiles";

const Meet = () => {
  return (
    <div className="meet-section">
      <SectionHeading primary={"Meet"} secondary={"the artists"} />
      <ArtistProfiles />
    </div>
  );
};

export default Meet;
