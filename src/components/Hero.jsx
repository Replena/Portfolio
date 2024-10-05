import github from "../images/button/github.svg";
import linkedin from "../images/button/linkedIn.svg";
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
          <button className="bg-white text-black border border-black py-2 px-4 rounded flex items-center hover:bg-tertiary hover:text-white hover:border-transparent">
            Hire me
          </button>
          <button className="bg-white text-black border border-black py-2 px-4 rounded flex items-center hover:bg-tertiary hover:text-white hover:border-transparent">
            <img src={github} className="" />
            Github
          </button>
          <button className="bg-white text-black border border-black py-2 px-4 rounded flex items-center hover:bg-tertiary hover:text-white hover:border-transparent">
            <img src={linkedin} className="fill-white" />
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
