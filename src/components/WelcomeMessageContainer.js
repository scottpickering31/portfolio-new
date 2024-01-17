import React from "react";
import "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import AboutMeImage from "../images/AboutMe.jpeg";

function WelcomeMessageContainer() {
  return (
    <>
      <div className="welcome-message-container">
        <div>
          <h1 className="welcome-h1">Welcome to my Portfolio!</h1>
        </div>
        <div className="portfolio-image-icons">
          <div className="social-media-icons">
            <a
              href="https://www.linkedin.com/in/scott-pickering-b6b05287/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/scottpickering31" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="mailto:scottpickering31@gmail.com"
              target="_blank"
              className="email-link"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelopeSquare} />
            </a>
            <a href="https://twitter.com/scottypickering" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faSquareXTwitter} />
            </a>
            <a
              href="https://www.facebook.com/scott.s.pickering"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
          <div className="portfolio-image">
            <img src={AboutMeImage} />
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomeMessageContainer;
