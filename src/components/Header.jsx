import { useLanguage } from "../contexts/languageContext";
import ModeSwitch from "./ModeSwitch";

const Header = () => {
  const { currentData, loading } = useLanguage();
  const sendEmail = () => {
    window.location.href = `mailto:recipient@example.com?subject=Subject&body=Message`;
  };
  if (loading) return <p>Loading...</p>;
  return (
    <header className="flex flex-col items-end p-4 space-y-4">
      <ModeSwitch />

      <div className="w-full flex justify-between items-center">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-light-lavender dark:bg-primary">
          <div className="text-2xl font-bold rotate-30 text-light-lightpink dark:text-dark-periwinkle">
            A
          </div>
        </div>

        <nav className="flex space-x-32 dark:text-secondary">
          <a href="#skills" className="btn-primary">
            {currentData.Header.skills}
          </a>
          <a href="#projects" className="btn-primary">
            {currentData.Header.projects}
          </a>
          <a href="#hireMe" className="btn-primary">
            {currentData.Header.hireMe}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
