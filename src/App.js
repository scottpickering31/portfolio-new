import React from "react";
import "./App.css";
import AboutMeContainer from "./components/AboutMeContainer";
import ProjectContainer from "./components/ProjectContainer";
import AchievementContainer from "./components/AchievementContainer";
import MyJourneyContainer from "./components/MyJourneyContainer";
import { Element } from "react-scroll";
import WelcomeMessageContainer from "./components/WelcomeMessageContainer";
import Footer from "./components/Footer";
import ToTopScroller from "./components/ToTopScroller";

function App() {
  return (
    <div className="background-container">
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
        <AchievementContainer />
      </Element>
      <Element name="section5">
        <Footer />
      </Element>
    </div>
  );
}

export default App;
