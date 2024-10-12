import { useLanguage } from "../contexts/languageContext";

const Projects = () => {
  const { currentData } = useLanguage();
  return (
    <section data-cy="projects-container" className="lg:py-16">
      <h2
        data-cy="projects-title"
        className="text-5xl text-center lg:text-left font-semibold dark:text-dark-blueGray mb-8 text-light-black"
      >
        {currentData.Projects.title}
      </h2>
      <div
        data-cy="projects-grid"
        className="grid grid-cols-1 lg:grid-cols-3 gap-x-40"
      >
        {currentData.Projects.items.map((project, index) => (
          <div
            data-cy={`project-${index}`}
            key={index}
            className="rounded-lg flex flex-col mb-20"
          >
            <img
              data-cy="project-image"
              src={project.img}
              alt={project.title}
              className="w-full object-cover"
            />
            <div
              data-cy="project-info"
              className="mt-3 flex flex-col flex-grow"
            >
              <h3
                data-cy="project-title"
                className="text-2xl text-center lg:text-left font-semibold mb-2 dark:text-dark-lightLavender text-light-blue"
              >
                {project.title}
              </h3>
              <p data-cy="project-description" className="mb-4 flex-grow">
                {project.description}
              </p>
              <div
                data-cy="project-technologies"
                className="flex flex-wrap gap-2 mb-4 justify-evenly lg:justify-start"
              >
                {project.technologies.map((tech, techIndex) => (
                  <span
                    data-cy={`project-tech-${techIndex}`}
                    key={techIndex}
                    className="px-2 py-1 rounded text-sm dark:text-dark-periwinkle dark:border dark:border-dark-periwinkle dark:bg-dark-darkGray text-tertiary border border-tertiary font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div
                data-cy="project-links"
                className="flex justify-between mx-5 lg:m-0 dark:text-dark-lightGray underline text-tertiary font-semibold"
              >
                <a
                  data-cy="project-github-link"
                  href={project.githubSite}
                  target="_blank"
                  className=""
                >
                  {project.github}
                </a>
                <a
                  data-cy="project-view-site-link"
                  href={project.viewSite}
                  target="_blank"
                >
                  {project.view}
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
