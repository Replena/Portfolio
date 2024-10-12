import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import data from "../data/data.json";
import axios from "axios";

const LanguageContext = createContext();
export function LanguageContextProvider({ children }) {
  const [language, setLanguage] = useLocalStorage("language", "");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filteredData, setFilteredData] = useState(data.en);

  useEffect(() => {
    const systemLanguage = navigator.language || navigator.userLanguage;
    const initialLanguage = systemLanguage.includes("tr") ? "tr" : "en";

    if (!language) {
      setLanguage(initialLanguage);
    }
  }, [language]);

  useEffect(() => {
    const loaded = sessionStorage.getItem("data");
    const isLoaded = sessionStorage.getItem("isLoaded");
    const parsedData = JSON.parse(loaded);
    if (isLoaded) {
      language === "en"
        ? setFilteredData(parsedData.en)
        : setFilteredData(parsedData.tr);
      setLoading(false);
    } else {
      const fetchData = async () => {
        try {
          const response = await axios.post(
            "https://reqres.in/api/workintech",
            data
          );
          language === "en"
            ? setFilteredData(response.data.en)
            : setFilteredData(response.data.tr);
          sessionStorage.setItem("data", JSON.stringify(response.data));
          sessionStorage.setItem("isLoaded", "true");
          setLoading(false);
        } catch (error) {
          console.log(error);
          setError(error.message);
        }
      };

      fetchData();
    }
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        currentData: filteredData,
        loading,
        setFilteredData,
        error,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
