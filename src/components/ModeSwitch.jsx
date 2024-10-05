import SunAndMoonIcon from "../images/switch/sunAndMoon.svg";

const ModeSwitch = () => {
  return (
    <div className="flex items-center space-x-4">
      <label className="flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only" />
        <div className="relative w-14 h-7 rounded-full flex items-center justify-between px-1">
          <div
            className={`h-6 w-6 rounded-full flex items-center justify-center transition-transform duration-300 
            }`}
          >
            <img src={SunAndMoonIcon} className="h-4 w-4" />
          </div>
        </div>
        <span className="ml-3 text-lg font-bold "></span>
      </label>
      <button className="text-lg font-bold">
        <span className="text-primary"></span> tr
      </button>
    </div>
  );
};

export default ModeSwitch;
