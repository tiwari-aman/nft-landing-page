//** Package Imports */
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";

const SocialIcons = ({ iconsArr, width, height }) => {
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

SocialIcons.propTypes = {
  iconsArr: PropTypes.array,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default SocialIcons;
