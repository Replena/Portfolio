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
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://reqres.in/api/workintech",
          data
        );
        language === "en"
          ? setFilteredData(response.data.en)
          : setFilteredData(response.data.tr);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        currentData: filteredData,
        loading,
        setFilteredData,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
