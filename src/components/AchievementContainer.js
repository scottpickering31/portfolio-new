import React from "react";
import "../App.css";
import AchievementCard from "./AchievementCard";
import Achievement1 from "../images/Achievement1.png";
import Achievement2 from "../images/Achievement2.png";
import Achievement3 from "../images/Achievement3.png";

function AchievementContainer() {
  const achievements = [
    {
      id: 1,
      title: "HTML Certification",
      imgUrl: `${Achievement2}`,
      hrefs:
        "https://www.codecademy.com/profiles/ScottPickering/certificates/9eb0741e5ebef1f9f58a53bfac67d3a7",
    },
    {
      id: 2,
      title: "Javascript Certification",
      imgUrl: `${Achievement3}`,
      hrefs:
        "https://www.codecademy.com/profiles/ScottPickering/certificates/705dcb15de0da4dd9d9fc4f3274b430e",
    },
    {
      id: 3,
      title: "Full Stack Engineer Certification",
      imgUrl: `${Achievement1}`,
      hrefs:
        "https://www.codecademy.com/profiles/ScottPickering/certificates/ffd0f42cce1a44e9a0108b365047a0a6",
    },
  ];

  return (
    <div className="achievement-hero">
      <h1>Achievements</h1>
      <div className="achievement-container">
        {achievements.map((achievement) => (
          <AchievementCard
            key={achievement.id}
            title={achievement.title}
            imgUrl={achievement.imgUrl}
            hrefs={achievement.hrefs}
          />
        ))}
      </div>
    </div>
  );
}

export default AchievementContainer;
