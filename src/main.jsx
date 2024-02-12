import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/assets/scss/style.scss";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>
);
