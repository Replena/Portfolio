import { toast } from "react-toastify";
import { useDarkMode } from "../contexts/darkModeContext";
import { useLanguage } from "../contexts/languageContext";

const ModeSwitch = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  const { setLanguage, currentData, language } = useLanguage();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode === false) {
      toast.info(currentData.Toast.light);
    } else {
      toast.dark(currentData.Toast.dark);
    }
  };

  const toggleLanguage = () => {
    const newLanguage = language === "tr" ? "en" : "tr";
    setLanguage(newLanguage);
    if (darkMode === true) {
      toast.info(currentData.Toast.language);
    } else {
      toast.dark(currentData.Toast.language);
    }
  };

  return (
    <div
      data-cy="mode-switch-container"
      className="p-4 lg:my-0 flex items-center space-x-4 justify-center"
    >
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <div
          data-cy="dark-mode-toggle"
          className="relative w-14 h-7 rounded-full flex items-center justify-between px-1 bg-primary dark:bg-dark-buttonColor"
        >
          <div
            className={`h-6 w-6 rounded-full flex items-center justify-center transition-transform duration-500 transform ${
              darkMode ? "translate-x-6" : ""
            }`}
          >
            <div src="" className="h-4 w-4 ring-0 bg-[#FFE86E] rounded-full" />
            {!darkMode && (
              <div className="absolute w-3 h-3 rounded-full bg-dark-buttonColor top-1/2 left-1/2  -translate-x-1/4 -translate-y-1/2" />
            )}
          </div>
        </div>
        <span data-cy="mode-switch-text" className="ml-3 text-lg font-bold ">
          {darkMode
            ? currentData.ModeSwitch.darkMode
            : currentData.ModeSwitch.lightMode}
        </span>
      </label>
      <div>|</div>
      <button
        data-cy="language-toggle"
        className="text-lg font-bold dark:text-dark-languageDark"
        onClick={toggleLanguage}
      >
        <span
          data-cy="language-switch-text"
          className="dark:text-dark-lightPurple text-primary"
        >
          {language === "en" ? (
            <>
              {currentData.ModeSwitch.languageSwitch}
              {currentData.ModeSwitch.languageTo}
            </>
          ) : (
            <>
              {currentData.ModeSwitch.languageTo}
              {currentData.ModeSwitch.languageSwitch}
            </>
          )}
        </span>
      </button>
    </div>
  );
};

export default ModeSwitch;
