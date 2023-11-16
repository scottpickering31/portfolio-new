import React from "react";
import "../App.css";

function AchievementCard({ details, title, imgUrl }) {
  return (
    <>
      <div className="achievement-card">
        <h1>{title}</h1>
        <img src={imgUrl} />
        <h3>{details}</h3>
      </div>
    </>
  );
}

export default AchievementCard;
