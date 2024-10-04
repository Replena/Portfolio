import LanguageContext from "../contexts/LanguageContext";

const Header = () => {
  LanguageContext();
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100">
      <div className="text-purple-600 text-2xl font-bold">A</div>
      <div className="flex space-x-4">
        <a className="text-gray-700 hover:text-purple-600">Skills</a>
        <a className="text-gray-700 hover:text-purple-600">Projects</a>
        <a className="text-gray-700 hover:text-purple-600">Hire me</a>
      </div>
    </header>
  );
};

export default Header;
