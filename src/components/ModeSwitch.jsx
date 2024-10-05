import { useContext } from "react";
import { DarkModeContext } from "../contexts/darkModeContext";
import SunAndMoonIcon from "../images/switch/sunAndMoon.svg";

const ModeSwitch = () => {
  const { darkMode, dispatch } = useContext(DarkModeContext);

  const handleToggle = () => {
    dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="flex items-center space-x-4">
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={darkMode}
          onChange={handleToggle}
        />
        <div className="relative w-14 h-7 rounded-full flex items-center justify-between px-1">
          <div
            className={`h-6 w-6 rounded-full flex items-center justify-center transition-transform duration-300 ${
              darkMode ? "translate-x-7" : ""
            }`}
          >
            <img
              src={SunAndMoonIcon}
              alt={darkMode ? "Ay" : "Güneş"}
              className="h-4 w-4"
            />
          </div>
        </div>
        <span className="ml-3 text-lg font-bold ">
          {darkMode ? "DARK MODE" : "LIGHT MODE"}
        </span>
      </label>
      <button className="text-lg font-medium">TÜRKÇE'YE GEÇ</button>
    </div>
  );
};

export default ModeSwitch;
