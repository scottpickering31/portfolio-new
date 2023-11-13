import React from "react";
import "../App.css";
import CertificationCard from "./CertificationCard";

function CertificationContainer() {
  const certificates = [
    {
      id: 1,
      details: "Information about Cert 1",
      title: "Certificate 1",
      imgUrl: "https://via.placeholder.com/400",
    },
    {
      id: 2,
      details: `Information about Cert 2`,
      title: "Certificate 2",
      imgUrl: "https://via.placeholder.com/400",
    },
    {
      id: 3,
      details: "Information about Cert 3",
      title: "Certificate 3",
      imgUrl: "https://via.placeholder.com/400",
    },
  ];

  return (
    <div className="certification-hero">
      <h1>Certification</h1>
      <div className="certification-container">
        {certificates.map((certificate) => (
          <CertificationCard
            key={certificate.id}
            details={certificate.details}
            title={certificate.title}
            imgUrl={certificate.imgUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default CertificationContainer;
