//** React Imports */
import { createContext, useState } from "react";

//** Package Imports */
import PropTypes from "prop-types";

const DarkModeContext = createContext(true);

const DarkModeProvider = ({ children }) => {

  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("DARK_MODE")) === true
  );

  let values = {
    darkMode,
    setDarkMode,
  };

  return (
    <DarkModeContext.Provider value={values}>
      {children}
    </DarkModeContext.Provider>
  );
};

DarkModeProvider.propTypes = {
  children: PropTypes.element,
};

export { DarkModeContext, DarkModeProvider };
