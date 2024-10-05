import { createContext, useEffect, useState } from "react";
import axios from "axios";
import data from "../data/data.json";
import { getData } from "./api";
const initialData = {
  skills: "",
  projects: "",
  hireMe: "",
};
export const DarkModeContext = createContext(initialData);

export function DarkModeContextProvider({ children }) {
  const [headerData, setHeaderData] = useState(initialData);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getData();
      if (res) {
        setHeaderData(res.en.header);
        console.log(headerData);
      }
    };

    fetchData();
  }, []);

  return (
    <DarkModeContext.Provider value={{ headerData }}>
      {children}
    </DarkModeContext.Provider>
  );
}
