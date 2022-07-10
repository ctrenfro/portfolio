import React from "react";

const Projects = (props) => {
  return (
    <div className="projects">
      <div>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <img className="projects--img" src={props.src} alt="Project 1" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
