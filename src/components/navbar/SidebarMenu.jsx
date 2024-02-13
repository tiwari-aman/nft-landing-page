//** React Imports */
import { useContext } from "react";

//** Package Imports */
import PropTypes from "prop-types";
import classNames from "classnames";
import { Icon } from "@iconify/react";

//** File Imports */
import Navlinks from "./Navlinks";
import SocialIcons from "../common/SocialIcons";
import { SocialMediaIcons } from "../../constants/constants";
import { DarkModeContext } from "../../context/DarkModeContext";

const SidebarMenu = ({ toggleMenu, setShow, show }) => {
  //**Hooks */
  const { darkMode } = useContext(DarkModeContext);

  const { twitter, discord, instagram, wallets } = SocialMediaIcons;
  //**Icon Array */
  const iconsArr = [twitter, discord, instagram, wallets];

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
