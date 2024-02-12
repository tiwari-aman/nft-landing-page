import { useContext } from "react";
import { SocialMediaIcons } from "../../../constants/constants";
import SocialIcons from "../../common/SocialIcons";
import Navlinks from "./Navlinks";
import { DarkModeContext } from "../../../context/DarkModeContext";
import { Icon } from "@iconify/react";
import classNames from "classnames";
import PropTypes from "prop-types";

const SidebarMenu = ({ toggleMenu, setShow, show }) => {
  const { twitter, discord, instagram, wallets } = SocialMediaIcons;
  const iconsArr = [twitter, discord, instagram, wallets];

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={classNames("sidebar-container", { "show ": show })}>
      <div
        className={classNames("sidebar-content", {
          "nav-dark": darkMode,
          "showSideBar ": show,
        })}
      >
        <div className="sidebar-header"></div>
        <div className="sidebar-body">
          <div className="toggle-icon">
            <Icon
              icon="icon-park-outline:close-one"
              className="cross-icon"
              width="25"
              height="25"
              onClick={toggleMenu}
            />
          </div>
          <Navlinks {...{ setShow, show }} />
          <SocialIcons iconsArr={iconsArr} width={30} height={26} />
        </div>
      </div>
    </div>
  );
};

SidebarMenu.propTypes = {
  toggleMenu: PropTypes.func,
  setShow: PropTypes.func,
  show: PropTypes.bool,
};

export default SidebarMenu;
