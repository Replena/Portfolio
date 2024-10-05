import React from "react";
import ModeSwitch from "./ModeSwitch";

const Header = () => {
  return (
    <header className="flex flex-col items-end p-4 space-y-4">
      <ModeSwitch />

      <div className="w-full flex justify-between items-center">
        <div className="text-2xl font-bold">A</div>
        <nav className="flex space-x-6">
          <a href="#skills" className="">
            Skills
          </a>
          <a href="#projects" className="">
            Projects
          </a>
          <a href="#hire-me" className="">
            Hire me
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
