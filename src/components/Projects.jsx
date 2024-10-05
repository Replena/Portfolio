import React from "react";

const projects = [
  {
    title: "Workintech",
    description:
      "A simple, customizable, minimal style cookie plugin that allows you to SSR and select which cookies to accept or decline.",
    image: "https://picsum.photos/100/70",
    github: "https://github.com/project1",
    viewSite: "https://project1.com",
    tags: ["React", "Redux", "Axios"],
  },
  {
    title: "Random Jokes",
    description:
      "This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package.",
    image: "https://picsum.photos/100/70",
    github: "https://github.com/project2",
    viewSite: "https://project2.com",
    tags: ["React", "Redux", "Axios"],
  },
  {
    title: "Journey",
    description:
      "A simple, customizable mini course plugin that allows you to SSR and select which cookies to accept or decline.",
    image: "https://picsum.photos/100/70",
    github: "https://github.com/project3",
    viewSite: "https://project3.com",
    tags: ["React", "Redux", "Axios"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden h-full flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover"
            />
            <div className="mt-3 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between mt-auto">
                <a href={project.github} target="_blank">
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
