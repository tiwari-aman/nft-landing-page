import Logo from "../../../assets/images/logos/nft-black-logo.svg";
import Navlinks from "./Navlinks";
import SocialIcons from "../../common/SocialIcons";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import DarkModeToggle from "../../common/DarkModeToggle";

const Navbar = () => {
  const [show, setShow] = useState();

  const toggleMenu = () => {
    setShow((pre) => !pre);
  };

  return (
    <>
      <div className="navbar container">
        {/* Logo */}
        <div className="logo">
          {/* <img src={Logo} alt="NftLogo" /> */}
          <h1 className="logo-text">NFTHub</h1>
          <DarkModeToggle />
        </div>
        <div className="nav-menu">
          {/* Links */}
          <Navlinks />
        </div>
        <div className="nav-menu">
          {/* Social Icon */}
          <SocialIcons />
        </div>

        {/* Hamburger Menu */}

        <HamburgerMenu toggleMenu={toggleMenu} />
      </div>
      {show && <SidebarMenu toggleMenu={toggleMenu} />}
    </>
  );
};

export default Navbar;
