import React from "react";
import "../App.css";

function ProjectCard({ title, details, imageUrl }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <img src={imageUrl} />
      <p>{details}</p>
    </div>
  );
}

export default ProjectCard;
