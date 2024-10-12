import { useLanguage } from "../contexts/languageContext";

const Hero = () => {
  const { currentData } = useLanguage();

  return (
    <section
      data-cy="hero-container"
      className="md:container lg:h-1/2 lg:mb-11 lg:mt-11 lg:flex lg:flex-row flex flex-col"
    >
      <div
        data-cy="hero-title"
        className="lg:w-2/3 w-full lg:flex lg:justify-between lg:flex-col lg:gap-5 gap-3"
      >
        <div className="flex mb-4 items-center my-4">
          <hr
            data-cy="hero-hr"
            className="border-t-2 w-1/12 mr-1 border-light-blue"
          />
          <h1 data-cy="hero-title-text" className=" font-bold text-light-blue ">
            {currentData.Intro.name}
          </h1>
        </div>
        <h1
          data-cy="hero-subtitle"
          className="text-4xl my-5 font-bold lg:mb-4 text-light-black sm:m-0 text-center mx-auto lg:text-left lg:mx-0 lg:text-7xl lg:w-3/4 dark:text-dark-blueGray"
        >
          {currentData.Intro.title}
        </h1>
        <p data-cy="hero-description" className="lg:w-2/3 w-full leading-7">
          {currentData.Intro.description}
        </p>

        <div
          data-cy="hero-buttons"
          className="flex lg:w-2/3 w-full space-x-2 justify-between lg:justify-start my-5"
        >
          {currentData.Buttons.map((button, index) => (
            <button
              data-cy={`hero-button-${index}`}
              key={index}
              className="p-1 lg:p-2 rounded flex items-center bg-white text-tertiary border border-tertiary  hover:bg-tertiary hover:text-white hover:border-transparent dark:bg-dark-darkGray dark:text-dark-lightGray dark:border dark:border-dark-lightGray hover:dark:text-black hover:dark:bg-dark-lightGray"
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

      <div data-cy="hero-image" className="lg:w-1/3 w-full lg:p-7">
        <img
          src={currentData.Intro.imgsrc}
          alt={currentData.Intro.name}
          className="w-full rounded-3xl drop-shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;
