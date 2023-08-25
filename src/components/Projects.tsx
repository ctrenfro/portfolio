import React from "react";

import { projects } from "./constants";

import ProjectComponent from "./ProjectComponent";

const Projects = () => {
  return (
    <div className="text-white mx-auto max-w-[800px]">
      {projects.map((project, index) => {
        const { name, id, description, image, github, site, tags } = project;
        return (
          <div className="text-white">
            <ProjectComponent
              name={name}
              id={id}
              description={description}
              image={image}
              github={github}
              site={site}
              tags={tags}
              key={index}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
