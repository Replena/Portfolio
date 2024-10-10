import { useLanguage } from "../contexts/languageContext";
import ModeSwitch from "./ModeSwitch";

const Header = () => {
  const { currentData } = useLanguage();

  return (
    <header className="lg:flex lg:flex-col lg:items-end lg:p-4 lg:space-y-4">
      <ModeSwitch />

      <div className="lg:w-full lg:flex lg:justify-between lg:items-center">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-light-lavender dark:bg-primary">
          <div className="text-2xl font-bold rotate-30 text-light-lightpink dark:text-dark-periwinkle">
            A
          </div>
        </div>

        <nav className="flex lg:space-x-32 justify-evenly dark:text-secondary">
          {currentData.Header.nav.map((item, index) => (
            <a href={`#${item}`} key={index} className="btn-primary">
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
