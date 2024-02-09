import Navlinks from "./Navlinks";
import SocialIcons from "../../common/SocialIcons";
import HamburgerMenu from "./HamburgerMenu";
import { useEffect, useState } from "react";
import SidebarMenu from "./SidebarMenu";
import DarkModeToggle from "../../common/DarkModeToggle";
import { SocialMediaIcons } from "../../../constants/constants";
import classNames from "classnames";

const Navbar = () => {
  const [show, setShow] = useState();
  const [scrolled, setScroled] = useState(false);

  const toggleMenu = () => {
    setShow((pre) => !pre);
    if (show) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  const { twitter, discord, instagram, wallets } = SocialMediaIcons;
  const iconsArr = [twitter, discord, instagram, wallets];

  const changeNavBg = () => {
    window.scrollY >= 20 ? setScroled(true) : setScroled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  return (
    <>
      <div className={classNames("navbar", { "scrolled-nav": scrolled })}>
        <div className="navbar-container">
          {/* Logo */}
          <div className="logo">
            <h1 className="logo-text">NFTHub</h1>
            <DarkModeToggle />
          </div>
          <div className="nav-menu">
            {/* Links */}
            <Navlinks />
          </div>
          <div className="nav-menu">
            {/* Social Icon */}
            <SocialIcons iconsArr={iconsArr} width={30} height={26} />
          </div>

          {/* Hamburger Menu */}
          <HamburgerMenu toggleMenu={toggleMenu} />
        </div>
      {show && <SidebarMenu toggleMenu={toggleMenu} setShow={setShow} show={show}/>}
      </div>
    </>
  );
};

export default Navbar;
