import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-16">
      <div className="md:w-2/3">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
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
          <button className="border border-white-300 py-2 px-4 rounded flex items-center ">
            Hire me
          </button>
          <button className="border border-white-300 py-2 px-4 rounded flex items-center ">
            Github
          </button>
          <button className="border border-white-300 py-2 px-4 rounded flex items-center ">
            LinkedIn
          </button>
        </div>
      </div>
      <div className="md:w-1/3 md:mt-0">
        <img
          src="https://picsum.photos/400/400"
          alt="Alperen Mimarlar"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
