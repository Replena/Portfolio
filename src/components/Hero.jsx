const Hero = () => {
  return (
    <div className="md:container  flex flex-col md:flex-row  ">
      <div className="md:w-2/3 inline">
        <div className="flex mb-4 items-center">
          <hr className="border-t-2 w-1/12 mr-1 border-light-blue" />
          <h1 className=" font-bold text-light-blue">Alperen Mimarlar</h1>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-light-black">
          Creative thinker
          <br />
          Minimalism lover
        </h1>
        <p className="mb-8 max-w-xl">
          Hi, I'm Alperen. I'm a full-stack developer. If you are looking for a
          Developer who to craft solid and scalable frontend products with great
          user experiences. Let's shake hands with me.
        </p>
        <div className="flex space-x-4">
          <button className="bg-white text-tertiary border border-tertiary py-2 px-4 rounded flex items-center hover:bg-tertiary hover:text-white hover:border-transparent dark:bg-dark-darkGray dark:text-dark-lightGray dark:border dark:border-dark-lightGray hover:dark:text-black hover:dark:bg-dark-lightGray">
            {" "}
            Hire me
          </button>
          <button className="bg-white text-tertiary border border-tertiary py-2 px-4 rounded flex items-center hover:bg-tertiary hover:text-white hover:border-transparent dark:bg-dark-darkGray dark:text-dark-lightGray dark:border dark:border-dark-lightGray hover:dark:text-black hover:dark:bg-dark-lightGray">
            {" "}
            <i class="fa-brands fa-github dark:text-dark-lightPurple"></i>
            Github
          </button>
          <button className="bg-white text-tertiary border border-tertiary py-2 px-4 rounded flex items-center hover:bg-tertiary hover:text-white hover:border-transparent dark:bg-dark-darkGray dark:text-dark-lightGray dark:border dark:border-dark-lightGray hover:dark:text-black hover:dark:bg-dark-lightGray">
            <i className="fab fa-linkedin-in dark:text-dark-lightPurple"></i>
            LinkedIn
          </button>
        </div>
      </div>
      <div className="md:w-1/3 md:mt-0 ">
        <img
          src="https://picsum.photos/id/1/200/300"
          alt="Alperen Mimarlar"
          className="w-full h-auto rounded-3xl "
        />
      </div>
    </div>
  );
};

export default Hero;
