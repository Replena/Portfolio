import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-start p-8 bg-gray-100">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Creative thinker Minimalism lover
        </h1>
        <p className="text-gray-600 mb-6">
          Hi, I'm Alperen. I'm a full-stack developer. If you are looking for a
          Developer who to craft solid and scalable frontend products with great
          user experiences. Let's shake hands with me.
        </p>
        <div className="flex space-x-4">
          <button className="px-4 py-2 border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition">
            Hire me
          </button>
          <button className="px-4 py-2 border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white transition">
            Github
          </button>
          <button className="px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition">
            LinkedIn
          </button>
        </div>
      </div>
      <div className="md:w-1/6 mt-6 md:mt-0 md:ml-6">
        <img
          src="https://picsum.photos/300/200"
          alt="Alperen Mimarlar"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
