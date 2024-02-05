import twitter from "../../assets/images/icons/twitter.svg";
import discord from "../../assets/images/icons/discord.svg";
import instagram from "../../assets/images/icons/instagram.svg";

const ProfileCard = ({ profile }) => {
  const { img, name, role } = profile;

  const socialIconsImages = [twitter, discord, instagram];

  return (
    <div className="profile-card">
      <img
        className="profile-img"
        src={img}
        alt="profile"
        width={142}
        height={142}
      />
      <div className="profile-detail">
        <h2>{name || ""}</h2>
        <p>{role || ""}</p>
        <p className="social-icons">
          {socialIconsImages.map((item, index) => {
            return (
              <img
                className="icon"
                key={index}
                src={item}
                alt="socialIcons"
                width={15}
                height={15}
              />
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
