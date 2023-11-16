import React, { useState } from "react";
import "../App.css";

function SideProjectCard({ title, details, imgUrl }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <div className="side-projects-card">
        <div className="side-projects-image-title">
          <img
            src={imgUrl}
            className="side-project-image"
            alt={`${title} project`}
          />
          <h3>{title}</h3>
        </div>
        <button onClick={toggleDetails}>Details</button>
      </div>
      <div>
        {showDetails && (
          <div className="details-image-buttons">
            <img src={imgUrl} />
            <div className="details-buttons">
              <p>{details}</p>
              <div className="details-buttons-container">
                <button>View Application</button>
                <button>Source Code</button>
                <button>Read Me File</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default SideProjectCard;
