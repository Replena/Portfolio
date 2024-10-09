import { createContext, useContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { toast } from "react-toastify";

const DarkModeContext = createContext();

export function DarkModeContextProvider({ children }) {
  const [darkMode, setDarkMode] = useLocalStorage(
    "darkMode",
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      toast.dark("Dark mode enabled");
    } else {
      document.documentElement.classList.remove("dark");
      toast.dark("Dark mode disabled");
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export const useDarkMode = () => useContext(DarkModeContext);
