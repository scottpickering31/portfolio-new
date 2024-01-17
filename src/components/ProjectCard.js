import React, { useState } from "react";
import "../App.css";

function ProjectCard({
  title,
  details,
  imageUrl,
  sourceCode,
  readMe,
  viewProject,
}) {
  const [toggleButton, setToggleButton] = useState(false);

  function handleClick() {
    setToggleButton(!toggleButton);
  }

  function renderButtons() {
    return (
      <div className="rendered-button-project-card">
        <p>{details}</p>
        <a href={viewProject} target="_blank">
          <button>View Project</button>
        </a>
        <a href={sourceCode} target="_blank">
          <button>View Code</button>
        </a>
        <a href={readMe} target="_blank">
          <button>Readme File</button>
        </a>
      </div>
    );
  }

  return (
    <div className="project-card">
      <h3>{title}</h3>
      <img src={imageUrl} />
      <button onClick={handleClick}>More Info</button>
      {toggleButton ? renderButtons() : null}
    </div>
  );
}

export default ProjectCard;
