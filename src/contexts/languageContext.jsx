import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
const LanguageContext = createContext();
import data from "../data/data.json";
import axios from "axios";

export function LanguageContextProvider({ children }) {
  const [language, setLanguage] = useLocalStorage("language", "");
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState(data.en);

  useEffect(() => {
    const systemLanguage = navigator.language || navigator.userLanguage;
    const initialLanguage = systemLanguage.includes("tr") ? "tr" : "en";

    if (!language) {
      setLanguage(initialLanguage);
    }
  }, [language]);

  useEffect(() => {
    axios
      .post("https://reqres.in/api/workintech", data)
      .then((response) => {
        console.log("RESPONSE: ", response);
        language === "en"
          ? setFilteredData(response.data.en)
          : setFilteredData(response.data.tr);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        currentData: filteredData,
        loading,
        setFilteredData,
        filteredData,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
