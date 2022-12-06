import React from "react";
import "./Projects.css";

function Project(props) {
  return (
    <div className="project">
      <img className="project-image" src={props.image} alt="project" />
      <div className="project-image-hover">
        <a className="project-link" href={props.link}>
          {props.name}
        </a>
        <p className="project-description">{props.description}</p>
      </div>
    </div>
  );
}

export default Project;
