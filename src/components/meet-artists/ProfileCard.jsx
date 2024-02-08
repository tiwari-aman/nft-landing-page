import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { SocialMediaIcons } from "../../constants/constants";
import SocialIcons from "../common/SocialIcons";
import classNames from "classnames";

const ProfileCard = ({ profile }) => {
  const { img, name, role } = profile;

  const { darkMode } = useContext(DarkModeContext);

  const { twitter, discord, instagram } = SocialMediaIcons;
  const iconsArr = [twitter, discord, instagram];

  return (
    <div className="profile-card">
      <div className="profile">
        <img
          className={classNames("profile-img", { dark: darkMode })}
          src={img}
          alt="profile"
        />
      </div>
      <div className="profile-detail">
        <h2>{name || ""}</h2>
        <p>{role || ""}</p>
        <SocialIcons iconsArr={iconsArr} width={15} height={15} />
      </div>
    </div>
  );
};

export default ProfileCard;
