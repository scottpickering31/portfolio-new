import React from "react";

function MyJourneyImageGrid({ title, details, className, source, alt }) {
  return (
    <div>
      <img
        src={source}
        className={className}
        details={details}
        title={title}
        alt={alt}
      />
    </div>
  );
}

export default MyJourneyImageGrid;
