import { useDarkMode } from "../contexts/darkModeContext";

const ModeSwitch = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex items-center space-x-4">
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <div className="relative w-14 h-7 rounded-full flex items-center justify-between px-1 bg-gray-300 dark:bg-dark-buttonColor">
          <div
            className={`h-6 w-6 rounded-full flex items-center justify-center transition-transform duration-500 transform ${
              darkMode ? "translate-x-6" : ""
            }`}
          >
            <div src="" className="h-4 w-4 ring-0 bg-[#FFE86E] rounded-full" />
          </div>
        </div>
        <span className="ml-3 text-lg font-bold ">
          {" "}
          {darkMode ? "Dark Mode" : "Light Mode"}
        </span>
      </label>
      <div>|</div>
      <button className="text-lg font-bold dark:text-dark-languageDark ">
        <span className="dark:text-dark-lightPurple text-primary">TÜRKÇE</span>
        'YE GEÇ
      </button>
    </div>
  );
};

export default ModeSwitch;
