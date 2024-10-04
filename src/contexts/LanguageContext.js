import { useState } from "react";
import axios from "axios";
import en from "../lang/en.json";
import tr from "../lang/tr.json";

function LanguageContext() {
  const getData = async (lang) => {
    try {
      const data = await axios.get(lang);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const data = getData(tr);
  console.log(data);

  return { data };
}

export default LanguageContext;
