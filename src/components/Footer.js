import React, { useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faAnglesDown, faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import GoogleMaps from "./GoogleMaps";
import { animateScroll as scroll } from "react-scroll";

{
  /* <div className="expand-container">
<FontAwesomeIcon icon={faAnglesDown} className="angles-down" />
<p>Retract</p>
<FontAwesomeIcon icon={faAnglesDown} className="angles-down" />
</div> */
}

// height: 87vh;

function Footer() {
  const [expand, setExpand] = useState(false);

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  const toggleFooterExpand = () => {
    setExpand(!expand);
    if (expand || !expand) {
      scrollToBottom();
    }
  };

  const dimensions = {
    fontSize: "4rem",
  };

  return (
    <>
      <div className={`footer-container ${expand ? "expanded-toggle" : ""}`}>
        <div className="expand-container" onClick={toggleFooterExpand}>
          <FontAwesomeIcon
            icon={expand ? faAnglesDown : faAnglesUp}
            className="angles"
          />
          <p>{expand ? "Shrink" : "Expand"}</p>
          <FontAwesomeIcon
            icon={expand ? faAnglesDown : faAnglesUp}
            className="angles"
          />
        </div>
        <div className="footer-contacts">
          <div>
            {expand ? (
              <h1 style={dimensions} className="contact-me-title">
                Contact Me
              </h1>
            ) : (
              <h1 className="contact-me-title">Contact Me</h1>
            )}
            {expand ? <h3>I am based in Stevenage</h3> : ""}
          </div>
          <div>
            <a href="mailto:scottpickering31@gmail.com" target="_blank">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>Email: scottpickering31@gmail.com</p>
            </a>
            <a
              href="https://www.linkedin.com/in/scott-pickering-b6b05287/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              <p>
                LinkedIn: https://www.linkedin.com/in/scott-pickering-b6b05287/
              </p>
            </a>
            <a href="https://github.com/scottpickering31" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
              <p>GitHub: https://github.com/scottpickering31</p>
            </a>
          </div>
        </div>
        <div
          className={`google-location ${
            expand ? "google-location-toggle" : ""
          }`}
        >
          <GoogleMaps />
        </div>
      </div>
    </>
  );
}

export default Footer;
