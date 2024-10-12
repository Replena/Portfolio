import { useLanguage } from "../contexts/languageContext";
import ModeSwitch from "./ModeSwitch";

const Header = () => {
  const { currentData } = useLanguage();
  return (
    <header
      data-cy="header-container"
      className="lg:flex lg:flex-col lg:items-end lg:p-4 lg:space-y-4"
    >
      <ModeSwitch />
      <div
        data-cy="nav-links"
        className="lg:w-full lg:flex lg:justify-between lg:items-center"
      >
        <div
          data-cy="nav-link-0"
          className="hidden lg:flex lg:items-center lg:justify-center lg:w-16 lg:h-16 lg:rounded-full bg-light-lavender dark:bg-primary"
        >
          <div className="text-2xl font-bold rotate-30 text-light-lightpink dark:text-dark-periwinkle">
            {currentData.FirstLetter}
          </div>
        </div>

        <nav
          data-cy="nav-links"
          className="flex lg:space-x-32 justify-evenly dark:text-secondary"
        >
          {currentData.Header.nav.map((item, index) => (
            <a
              href={`#${item}`}
              key={index}
              className="btn-primary"
              data-cy={`nav-link-${index}`}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
