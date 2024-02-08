import { Icon } from "@iconify/react";

const SocialIcons = ({iconsArr, width, height}) => {
  
  return (
    <div className="social-icons">
      {iconsArr?.map((item, index) => {
        return (
          <Icon
            className="icon"
            key={index}
            icon={item}
            alt="socialIcons"
            width={width}
            height={height}
          />
        );
      })}
    </div>
  );
};

export default SocialIcons;
