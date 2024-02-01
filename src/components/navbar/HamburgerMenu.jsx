import hamburger from "../../assets/images/logos/hamburger.svg";
const HamburgerMenu = ({toggleMenu}) => {

  return (
    <>
      <div className="toggler" onClick={toggleMenu}>
        <img src={hamburger} alt="hamburger" width={30} height={30} />
      </div>
    </>
  );
};

export default HamburgerMenu;
