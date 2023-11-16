import React from "react";
import ProjectCard from "./ProjectCard";
import "../App.css";
import moviefinder from "../images/movie-finder.png";
import scottify from "../images/scottify-app-image.png";

function ProjectContainer() {
  const projects = [
    {
      id: 1,
      title: "Scottify",
      details: "Details 1",
      imageUrl: `${scottify}`,
    },
    {
      id: 2,
      title: "Mobile App",
      details: "Details 2",
      imageUrl: "https://via.placeholder.com/400",
    },
    {
      id: 3,
      title: "Movie Finder",
      details: "Details 3",
      imageUrl: `${moviefinder}`,
    },
  ];

  return (
    <div className="project-container-outer">
      <h1>Main Projects</h1>
      <div className="project-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            details={project.details}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectContainer;
