import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DarkModeContextProvider } from "./contexts/darkModeContext.jsx";

createRoot(document.getElementById("root")).render(
  <DarkModeContextProvider>
    <App />
  </DarkModeContextProvider>
);
