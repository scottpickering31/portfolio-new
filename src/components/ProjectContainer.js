import React from "react";
import ProjectCard from "./ProjectCard";
import "../App.css";

function ProjectContainer() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      details: "Details 1",
      imageUrl: "https://via.placeholder.com/400",
    },
    {
      id: 2,
      title: "Project 2",
      details: "Details 2",
      imageUrl: "https://via.placeholder.com/400",
    },
    {
      id: 3,
      title: "Project 3",
      details: "Details 3",
      imageUrl: "https://via.placeholder.com/400",
    },
  ];

  return (
    <div>
      <h1>Projects</h1>
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
