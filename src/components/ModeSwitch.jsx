import SunAndMoonIcon from "../images/switch/sunAndMoon.svg";

import { useState } from "react";

const ModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex items-center space-x-4">
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={isDarkMode}
          onChange={handleToggle}
        />
        <div className="relative w-14 h-7 rounded-full flex items-center justify-between px-1">
          <div
            className={`h-6 w-6 rounded-full flex items-center justify-center transition-transform duration-300 ${
              isDarkMode ? "translate-x-7" : ""
            }`}
          >
            {isDarkMode ? (
              <img src={SunAndMoonIcon} alt="Ay" className="h-4 w-4" />
            ) : (
              <img src={SunAndMoonIcon} alt="Güneş" className="h-4 w-4" />
            )}
          </div>
        </div>
        <span className="ml-3 text-lg font-bold ">
          {isDarkMode ? "DARK MODE" : "LIGHT MODE"}
        </span>
      </label>
      <button className="text-lg font-medium">TÜRKÇE'YE GEÇ</button>
    </div>
  );
};

export default ModeSwitch;
