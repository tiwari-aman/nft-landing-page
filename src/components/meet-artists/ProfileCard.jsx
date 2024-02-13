//** React Imports */
import { useContext } from "react";

//** Package Imports */
import PropTypes from "prop-types";
import classNames from "classnames";

//** File Imports */
import SocialIcons from "../common/SocialIcons";
import { DarkModeContext } from "../../context/DarkModeContext";
import { SocialMediaIcons } from "../../constants/constants";


const ProfileCard = ({ data }) => {

  const { img, name, role } = data;

  //**Hooks */
  const { darkMode } = useContext(DarkModeContext);

  const { twitter, discord, instagram } = SocialMediaIcons;
  //** Icon array */
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

ProfileCard.propTypes = {
  data: PropTypes.object,
};

export default ProfileCard;
