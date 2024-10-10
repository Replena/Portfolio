import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LanguageContextProvider } from "./contexts/languageContext.jsx";

createRoot(document.getElementById("root")).render(
  <LanguageContextProvider>
    <App />
  </LanguageContextProvider>
);
