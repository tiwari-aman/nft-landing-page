//** File Imports */
import ProfileCard from "./ProfileCard";
import artist1 from "../../assets/images/pages/artist1.svg";
import artist2 from "../../assets/images/pages/artist2.svg";
import artist3 from "../../assets/images/pages/artist3.svg";
import artist4 from "../../assets/images/pages/artist4.svg";
import MapThrough from "../common/MapThrough";

const ArtistProfiles = () => {
  //** Artist Array */
  const artistArr = [
    {
      img: artist1,
      name: "Steps Jobs",
      role: "Artist",
    },
    {
      img: artist2,
      name: "Andry Moray",
      role: "Blockchain",
    },
    {
      img: artist3,
      name: "Zaid Ed",
      role: "Developer",
    },
    {
      img: artist4,
      name: "Laila Ed",
      role: "Marketing",
    },
  ];

  return (
    <div className="profiles">
      <MapThrough data={artistArr} RenderComponent={ProfileCard} />
    </div>
  );
};

export default ArtistProfiles;
