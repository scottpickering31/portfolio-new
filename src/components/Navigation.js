import React from "react";
import { scroller } from "react-scroll";

function Navigation() {
  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: -120,
    });
  };

  return (
    <div className="nav-bar">
      <ul>
        <li onClick={() => scrollToSection("section1")}>ABOUT ME</li>
        <li onClick={() => scrollToSection("section2")}>PROJECTS</li>
        <li onClick={() => scrollToSection("section3")}>MY JOURNEY</li>
        <li onClick={() => scrollToSection("section4")}>CERTIFICATION</li>
        <li onClick={() => scrollToSection("section5")}>SIDE PROJECTS</li>
        <li onClick={() => scrollToSection("section6")}>CONTACT</li>
      </ul>
    </div>
  );
}

export default Navigation;
