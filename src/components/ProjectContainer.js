import React from "react";
import ProjectCard from "./ProjectCard";
import "../App.css";
import moviefinder from "../images/movie-finder.jpg";
import scottify from "../images/scottify-app-image.jpg";
import CarPickerForm from "../images/CarPickerForm.png";

function ProjectContainer() {
  const projects = [
    {
      id: 1,
      title: "Elite Drives",
      details:
        "Built using Vite, React, Redux and Tailwind-CSS and utilising libraries such as react-calendar and react-google-maps, Elite Drives is a supercar rental website that offers a variety of cars and services for a given period of time.",
      imageUrl: `${CarPickerForm}`,
      sourceCode: "https://github.com/scottpickering31/car-portfolio-project",
      readMe:
        "https://github.com/scottpickering31/car-portfolio-project/blob/main/README.md",
      viewProject: "https://scottpickering31.github.io/car-portfolio-project/",
    },
    {
      id: 2,
      title: "Scottify",
      details:
        "A Spotify Playlist creator app created using Javascript and React, by logging in to your spotify account through the Spotify API you can then create your very own titled playlist in no time!",
      imageUrl: `${scottify}`,
      sourceCode: "https://github.com/scottpickering31/scottify-app",
      readMe:
        "https://github.com/scottpickering31/scottify-app/blob/main/README.md",
      viewProject: "https://scottpickering31.github.io/scottify-app/",
    },
    {
      id: 3,
      title: "Movie Finder",
      details:
        "A Movie finder app that is linked to a movie finder API, simply search for whichever movie of your choosing, and upon searching you will be shown a list of results, simply click your chosen film for more details regarding that particular film",
      imageUrl: `${moviefinder}`,
      sourceCode: "https://github.com/scottpickering31/movie-finder",
      readMe:
        "https://github.com/scottpickering31/movie-finder/blob/master/README.md",
      viewProject: "https://scottpickering31.github.io/movie-finder/",
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
            sourceCode={project.sourceCode}
            readMe={project.readMe}
            viewProject={project.viewProject}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectContainer;
