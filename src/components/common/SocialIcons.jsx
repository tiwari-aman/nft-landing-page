import { Icon } from "@iconify/react";

const SocialIcons = () => {
  const socialIcons = [
    "mdi:twitter",
    "ic:baseline-discord",
    "mdi:instagram",
    "fa-solid:wallet",
  ];

  return (
    <div className="social-icons">
      {socialIcons.map((item, index) => {
        return (
          <Icon
            className="icon"
            key={index}
            icon={item}
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
