import React from "react";
import { useLanguage } from "../contexts/languageContext";
import useLocalStorage from "../hooks/useLocalStorage";

function LazyLoading() {
  const { language } = useLanguage();
  const [darkMode] = useLocalStorage(
    "darkMode",
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  return (
    <div
      className={`flex items-center justify-center h-screen ${
        darkMode ? "bg-light-primary" : "bg-dark-bg"
      }`}
    >
      <div className="relative flex items-center">
        <span className="text-2xl pr-4 animate-pulse text-light-black dark:text-dark-blueGray">
          {language === "en" ? "Loading" : "Yükleniyor"}
        </span>
        <div className="w-12 h-12 border-2 border-dark-bg dark:border-dark-blueGray border-t-transparent dark:border-t-transparent border-solid rounded-full animate-spin"></div>
      </div>
    </div>
  );
}

export default LazyLoading;
