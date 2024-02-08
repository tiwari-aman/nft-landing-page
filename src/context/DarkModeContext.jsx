import { createContext, useState } from "react";

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

export { DarkModeContext, DarkModeProvider };
