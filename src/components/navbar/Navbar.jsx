//** React Imports */
import { useEffect, useState } from "react";

//** Package Imports */
import classNames from "classnames";

//** File Imports */
import Navlinks from "./Navlinks";
import HamburgerMenu from "./HamburgerMenu";
import SidebarMenu from "./SidebarMenu";
import SocialIcons from "../common/SocialIcons";
import DarkModeToggle from "../common/DarkModeToggle";
import { SocialMediaIcons } from "../../constants/constants";

const Navbar = () => {
  //**States */
  const [show, setShow] = useState();
  const [scrolled, setScroled] = useState(false);

  const { twitter, discord, instagram, wallets } = SocialMediaIcons;
  //** Icon Array */
  const iconsArr = [twitter, discord, instagram, wallets];

  /**
   * Toggles the menu visibility and adjusts body overflow accordingly.
   */
  const toggleMenu = () => {
    setShow((pre) => !pre);
    if (show) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  /**
   * A function to change the background of the navigation based on the scroll position of the window.
   */
  const changeNavBg = () => {
    window.scrollY >= 10 ? setScroled(true) : setScroled(false);
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
          <div className="logo">
            <h1 className="logo-text" onClick={() => window.scrollTo(0, 0)}>NFTHub</h1>
            <DarkModeToggle />
          </div>
          <div className="nav-menu">
            <Navlinks />
          </div>
          <div className="nav-menu">
            <SocialIcons iconsArr={iconsArr} width={30} height={26} />
          </div>
          <HamburgerMenu toggleMenu={toggleMenu} />
        </div>
        <SidebarMenu toggleMenu={toggleMenu} setShow={setShow} show={show} />
      </div>
    </>
  );
};

export default Navbar;
