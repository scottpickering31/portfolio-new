import React from "react";
import Navigation from "./components/Navigation";
import "./App.css";
import AboutMeContainer from "./components/AboutMeContainer";
import ProjectContainer from "./components/ProjectContainer";
import CertificationContainer from "./components/CertificationContainer";
import MyJourneyContainer from "./components/MyJourneyContainer";
import SideProjectsContainer from "./components/SideProjectsContainer";
import { Element } from "react-scroll";
import WelcomeMessageContainer from "./components/WelcomeMessageContainer";
import Footer from "./components/Footer";
import ToTopScroller from "./components/ToTopScroller";

function App() {
  return (
    <div>
      <Navigation />
      <Element name="top">
        <ToTopScroller />
      </Element>
      <WelcomeMessageContainer />
      <Element name="section1" className="about-me-contacts-hero">
        <AboutMeContainer />
      </Element>
      <Element name="section2">
        <ProjectContainer />
      </Element>
      <Element name="section3" className="my-journey-contacts-hero">
        <MyJourneyContainer />
      </Element>
      <Element name="section4">
        <CertificationContainer />
      </Element>
      <Element name="section5">
        <SideProjectsContainer />
      </Element>
      <Element name="section6">
        <Footer />
      </Element>
    </div>
  );
}

export default App;
