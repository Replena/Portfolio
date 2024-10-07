import { createContext, useContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useFetchData from "./api";
const LanguageContext = createContext();

export function LanguageContextProvider({ children }) {
  const [language, setLanguage] = useLocalStorage("language", "");
  const { fetchedData, loading } = useFetchData(language);

  useEffect(() => {
    const systemLanguage = navigator.language || navigator.userLanguage;
    const initialLanguage = systemLanguage.includes("tr") ? "tr" : "en";

    if (!language) {
      setLanguage(initialLanguage);
    }
  }, [language, setLanguage]);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, currentData: fetchedData, loading }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
