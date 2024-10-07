import { useLanguage } from "../contexts/languageContext";
const projects = [
  {
    title: "Workintech",
    description:
      "A simple, customizable, minimal style cookie plugin that allows you to SSR and select which cookies to accept or decline.",
    image: "https://picsum.photos/80",
    github: "https://github.com/project1",
    viewSite: "https://project1.com",
    tags: ["React", "Redux", "Axios"],
  },
  {
    title: "Random Jokes",
    description:
      "This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package.",
    image: "https://picsum.photos/80",
    github: "https://github.com/project2",
    viewSite: "https://project2.com",
    tags: ["React", "Redux", "Axios"],
  },
  {
    title: "Journey",
    description:
      "A simple, customizable mini course plugin that allows you to SSR and select which cookies to accept or decline.",
    image: "https://picsum.photos/80",
    github: "https://github.com/project3",
    viewSite: "https://project3.com",
    tags: ["React", "Redux", "Axios"],
  },
];

const Projects = () => {
  const { currentData } = useLanguage();
  if (!currentData) return <p>Loading...</p>;
  return (
    <section id="projects" className="py-16">
      <h2 className="text-4xl font-semibold dark:text-dark-blueGray mb-8 text-light-black">
        {currentData.Projects.projectsTitle}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-40">
        {projects.map((project, index) => (
          <div key={index} className="rounded-lg flex flex-col">
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover"
            />
            <div className="mt-3 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold mb-2 dark:text-dark-lightLavender text-light-blue">
                {project.title}
              </h3>
              <p className="mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4 ">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 rounded text-sm dark:text-dark-periwinkle dark:border dark:border-dark-periwinkle dark:bg-dark-darkGray text-tertiary border border-tertiary font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between mt-auto dark:text-dark-lightGray underline text-tertiary font-semibold">
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
