import { useContext } from "react";
import ModeSwitch from "./ModeSwitch";
import { DarkModeContext } from "../contexts/dataContext";
const Header = () => {
  const { headerData } = useContext(DarkModeContext);
  return (
    <header className="flex flex-col items-end p-4 space-y-4">
      <ModeSwitch />

      <div className="w-full flex justify-between items-center">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-light-lavender dark:bg-primary">
          <div className="text-2xl font-bold rotate-30 text-light-lightpink dark:text-dark-periwinkle">
            A
          </div>
        </div>
        <nav className="flex space-x-32 dark:text-light-gray ">
          <a
            href="#skills"
            className="btn-primary hover:dark:text-tertiary"
          ></a>
          <a href="#projects" className="btn-primary">
            aasda
          </a>
          <a href="#hire-me" className="btn-primary">
            dsadsa
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
