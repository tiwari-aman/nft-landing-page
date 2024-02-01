import twitter from "../../assets/images/logos/twitter.svg";
import discord from "../../assets/images/logos/discord.svg";
import instagram from "../../assets/images/logos/instagram.svg";
import facebook from "../../assets/images/logos/briefcase.svg";

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
