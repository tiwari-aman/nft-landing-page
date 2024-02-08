import { useEffect, useContext } from "react";
import "../../assets/scss/style.scss";
import { Icon } from "@iconify/react";
import { DarkModeContext } from "../../context/DarkModeContext";

const DarkModeToggle = () => {

  const { darkMode, setDarkMode } = useContext(DarkModeContext);


  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document
        .getElementsByClassName("home")
        .item(0)
        .classList.remove("light-mode");
    } else {
      document
        .getElementsByClassName("home")
        .item(0)
        .classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("DARK_MODE", JSON.stringify(darkMode));
  }, [darkMode]);

  const handleModeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Icon
      className="mode-icon"
      icon={darkMode ? "iconamoon:mode-light-fill" : "tdesign:mode-dark"}
      width="1.75rem"
      height="1.75rem"
      onClick={handleModeChange}
    />
  );
};

export default DarkModeToggle;