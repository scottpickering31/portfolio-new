import React from "react";
import "../App.css";

function CertificationCard({ details, title, imgUrl }) {
  return (
    <>
      <div className="certification-card">
        <h1>{title}</h1>
        <div>
          <div>
            <img src={imgUrl} />
          </div>
          <div>
            <h3>{details}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default CertificationCard;
