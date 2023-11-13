import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { scroller } from "react-scroll";
import "../App.css";

function ToTopScroller() {
  const scrollToTop = () => {
    scroller.scrollTo("top", {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: -160,
    });
  };
  return (
    <div className="to-top-scroller-container">
      <li onClick={() => scrollToTop()}>
        <FontAwesomeIcon icon={faAngleUp} className="to-top-scroller" />
      </li>
    </div>
  );
}

export default ToTopScroller;
