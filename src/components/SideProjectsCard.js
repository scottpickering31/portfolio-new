import React from "react";
import "../App.css";

function SideProjectCard({ title, details, imgUrl }) {
  return (
    <div className="side-projects-card">
      <h3>{title}</h3>
      <img src={imgUrl} />
      <p>{details}</p>
    </div>
  );
}

export default SideProjectCard;
