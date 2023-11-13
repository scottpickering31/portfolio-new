import React from "react";
import SideProjectCard from "./SideProjectsCard";
import "../App.css";

function SideProjectsContainer() {
  const sideProjects = [
    {
      id: 1,
      details: "Details about sideProject1",
      title: "Title of sideproject 1",
      imgUrl: "https://via.placeholder.com/400",
    },
    {
      id: 2,
      details: "Details about sideProject2",
      title: "Title of sideproject 2",
      imgUrl: "https://via.placeholder.com/400",
    },
    {
      id: 3,
      details: "Details about sideProject3",
      title: "Title of sideproject 3",
      imgUrl: "https://via.placeholder.com/400",
    },
    {
      id: 4,
      details: "Details about sideProject4",
      title: "Title of sideproject 4",
      imgUrl: "https://via.placeholder.com/400",
    },
    {
      id: 5,
      details: "Details about sideProject5",
      title: "Title of sideproject 5",
      imgUrl: "https://via.placeholder.com/400",
    },
    {
      id: 6,
      details: "Details about sideProject6",
      title: "Title of sideproject 6",
      imgUrl: "https://via.placeholder.com/400",
    },
    {
      id: 7,
      details: "Details about sideProject7",
      title: "Title of sideproject 7",
      imgUrl: "https://via.placeholder.com/400",
    },
    {
      id: 8,
      details: "Details about sideProject8",
      title: "Title of sideproject 8",
      imgUrl: "https://via.placeholder.com/400",
    },
    {
      id: 9,
      details: "Details about sideProject9",
      title: "Title of sideproject 9",
      imgUrl: "https://via.placeholder.com/400",
    },
    {
      id: 10,
      details: "Details about sideProject10",
      title: "Title of sideproject 10",
      imgUrl: "https://via.placeholder.com/400",
    },
  ];

  return (
    <div className="side-projects-hero">
      <h1>Side Projects</h1>
      <div className="side-projects-container">
        {sideProjects.map((sideProject) => (
          <SideProjectCard
            key={sideProject.id}
            details={sideProject.details}
            title={sideProject.title}
            imgUrl={sideProject.imgUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default SideProjectsContainer;
