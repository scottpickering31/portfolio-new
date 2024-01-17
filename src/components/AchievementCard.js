import React from "react";
import "../App.css";

function AchievementCard({ title, imgUrl, hrefs }) {
  return (
    <>
      <div className="achievement-card">
        <h2>{title}</h2>
        <a href={hrefs} target="_blank">
          <img src={imgUrl} />
        </a>
      </div>
    </>
  );
}

export default AchievementCard;
