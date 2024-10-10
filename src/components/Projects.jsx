import { useLanguage } from "../contexts/languageContext";

const Projects = () => {
  const { currentData } = useLanguage();
  return (
    <section id="projects" className="lg:py-16">
      <h2 className="text-5xl text-center lg:text-left font-semibold dark:text-dark-blueGray mb-8 text-light-black">
        {currentData.Projects.title}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-40">
        {currentData.Projects.items.map((project, index) => (
          <div key={index} className="rounded-lg flex flex-col mb-20">
            <img
              src={project.img}
              alt={project.title}
              className="w-full object-cover"
            />
            <div className="mt-3 flex flex-col flex-grow">
              <h3 className="text-2xl text-center lg:text-left font-semibold mb-2 dark:text-dark-lightLavender text-light-blue">
                {project.title}
              </h3>
              <p className="mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4 justify-evenly lg:justify-start">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 rounded text-sm dark:text-dark-periwinkle dark:border dark:border-dark-periwinkle dark:bg-dark-darkGray text-tertiary border border-tertiary font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between mx-5 lg:m-0 dark:text-dark-lightGray underline text-tertiary font-semibold">
                <a href={project.github} target="_blank" className="">
                  Github
                </a>
                <a href={project.viewSite} target="_blank">
                  View Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
