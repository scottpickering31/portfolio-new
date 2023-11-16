import React from "react";
import "../App.css";
import AchievementCard from "./AchievementCard";
import achievement1 from "../images/Achievement2.png";
import achievement2 from "../images/scott-certificate-codecademy.png";
import achievement3 from "../images/Achievement3.png";

function AchievementContainer() {
  const achievements = [
    {
      id: 1,
      details: "Information about achievement 1",
      title: "achievement 1",
      imgUrl: `${achievement3}`,
    },
    {
      id: 2,
      details: `Information about Achievement 2`,
      title: "Achievement 2",
      imgUrl: `${achievement1}`,
    },
    {
      id: 3,
      details: "Information about Achievement 3",
      title: "Achievement 3",
      imgUrl: `${achievement2}`,
    },
  ];

  return (
    <div className="achievement-hero">
      <h1>Achievements</h1>
      <div className="achievement-container">
        {achievements.map((achievement) => (
          <AchievementCard
            key={achievement.id}
            details={achievement.details}
            title={achievement.title}
            imgUrl={achievement.imgUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default AchievementContainer;
