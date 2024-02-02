import twitter from "../../assets/images/icons/twitter.svg";
import discord from "../../assets/images/icons/discord.svg";
import instagram from "../../assets/images/icons/instagram.svg";
import facebook from "../../assets/images/icons/briefcase.svg";

const SocialIcons = () => {
  const socialIconsImages = [twitter, discord, instagram, facebook];

  return (
    <div className="social-icons">
      {socialIconsImages.map((item, index) => {
        return (
          <img
            className="icon"
            key={index}
            src={item}
            alt="socialIcons"
            width={30}
            height={26}
          />
        );
      })}
    </div>
  );
};

export default SocialIcons;
