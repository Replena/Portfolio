import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LanguageContextProvider } from "./contexts/languageContext.jsx";
import { DarkModeContextProvider } from "./contexts/darkModeContext.jsx";

createRoot(document.getElementById("root")).render(
  <LanguageContextProvider>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </LanguageContextProvider>
);
