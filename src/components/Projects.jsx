import React from "react";

const projects = [
  {
    title:
      "A simple, customizable, minimal style cookie plugin that allows you to SSR and select which cookies to accept or decline.",
    description:
      "This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    image: "https://picsum.photos/200/300",
    github: "https://github.com/project1",
    viewSite: "https://project1.com",
    react: "react",
    redux: "redux",
    axios: "axios",
  },
  {
    title:
      "A simple, customizable jokes plugin that allows you to SSR and select which cookies to accept or decline.",
    description:
      "This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    image: "https://picsum.photos/200/300",
    github: "https://github.com/project2",
    viewSite: "https://project2.com",
    react: "react",
    redux: "redux",
    axios: "axios",
  },
  {
    title:
      "A simple, customizable mini course plugin that allows you to SSR and select which cookies to accept or decline.",
    description:
      "This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    image: "https://picsum.photos/200/300",
    github: "https://github.com/project3",
    viewSite: "https://project3.com",
    react: "react",
    redux: "redux",
    axios: "axios",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={`Project ${index + 1}`} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <button>{project.react}</button>
            <button>{project.redux}</button>
            <button>{project.axios}</button>
            <div className="project-links">
              <a href={project.github} target="_blank">
                Github
              </a>
              <a href={project.viewSite} target="_blank">
                View Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
