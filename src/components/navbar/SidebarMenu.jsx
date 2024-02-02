import SocialIcons from "../common/SocialIcons.jsx";
import Navlinks from "./Navlinks";

const SidebarMenu = ({ toggleMenu }) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-content">
        <div className="sidebar-header"></div>
        <div className="sidebar-body">
          <div className="toggle-icon" onClick={toggleMenu}>
            X
          </div>
          <Navlinks />
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
