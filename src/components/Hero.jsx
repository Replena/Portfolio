import { useLanguage } from "../contexts/languageContext";

const Hero = () => {
  const { currentData } = useLanguage();

  return (
    <section className="md:container lg:h-1/2 lg:mb-11 lg:mt-11 lg:flex lg:flex-row flex flex-col">
      <div className="lg:w-2/3 w-full lg:flex lg:justify-between lg:flex-col lg:gap-5 gap-3">
        <div className="flex mb-4 items-center my-4">
          <hr className="border-t-2 w-1/12 mr-1 border-light-blue" />
          <h1 className=" font-bold text-light-blue ">
            {currentData.Intro.name}
          </h1>
        </div>
        <h1 className="text-4xl my-5 font-bold lg:mb-4 text-light-black sm:m-0 text-center mx-auto lg:text-left lg:mx-0 lg:text-7xl lg:w-3/4 ">
          {currentData.Intro.title}
        </h1>
        <p className="lg:w-2/3 w-full">{currentData.Intro.description}</p>

        <div className="flex lg:w-2/3 w-full space-x-2 justify-between lg:justify-start my-5">
          {currentData.Buttons.map((button, index) => (
            <button
              key={index}
              className="p-1 rounded flex items-center bg-white text-tertiary border border-tertiary  hover:bg-tertiary hover:text-white hover:border-transparent dark:bg-dark-darkGray dark:text-dark-lightGray dark:border dark:border-dark-lightGray hover:dark:text-black hover:dark:bg-dark-lightGray"
            >
              {button.icon && (
                <i
                  className={`${button.icon} dark:text-dark-lightPurplelg: mr-1 text-2xl`}
                ></i>
              )}
              {button.label}
            </button>
          ))}
        </div>
      </div>

      <div className="lg:w-1/3 w-full lg:p-7">
        <img
          src="https://picsum.photos/id/1/200/200"
          alt="Alperen Mimarlar"
          className="w-full rounded-3xl drop-shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;
