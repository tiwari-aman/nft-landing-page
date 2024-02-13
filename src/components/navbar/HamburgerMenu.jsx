//** Package Imports */
import PropTypes from "prop-types";
//** File Imports */
import hamburger from "../../assets/images/icons/hamburger.svg";
import Image from "../common/Image";
const HamburgerMenu = ({ toggleMenu }) => {
  return (
    <>
      <div className="toggler" onClick={toggleMenu}>
        <Image src={hamburger} alt="hamburger" width={30} height={30} />
      </div>
    </>
  );
};

HamburgerMenu.propTypes = {
  toggleMenu: PropTypes.func,
};

export default HamburgerMenu;
