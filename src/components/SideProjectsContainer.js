import React, { useState } from "react";
import SideProjectCard from "./SideProjectsCard";
import "../App.css";
import BusinessOutfitterBob from "../images/Business Outfitter Bob.png";
import flighttrackerimage from "../images/flight-tracker-image.png";
import pianokeysimage from "../images/piano-keys-image.png";
import pokedexproject from "../images/pokedex-project.png";
import redditredesign from "../images/reddit-redesign.png";
import scottbot4000 from "../images/scottbot4000.png";
import thesaurusproject from "../images/thesaurus-project.png";

function SideProjectsContainer() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleToggle = (feature) => {
    setSelectedFeature((prevFeature) =>
      prevFeature === feature ? null : feature
    );
  };

  const sideProjects = [
    {
      id: 1,
      title: "Business Outfitter Bob",
      details:
        "A fun Javascript game made using Phaser.js, this was created as part of my learning during my CodeCademy learning",
      imgUrl: `${BusinessOutfitterBob}`,
      reactNative: false,
      vanillajs: true,
      react: false,
      all: true,
    },
    {
      id: 2,
      title: "Toronto Pearson Flight Tracker",
      details:
        "A flight tracking application created by fetching JSON data from an airport API endpoint, refreshing and presenting data in real-time",
      imgUrl: `${flighttrackerimage}`,
      reactNative: false,
      vanillajs: true,
      react: false,
      all: true,
    },
    {
      id: 3,
      title: "Piano Keys",
      details:
        "A piano player application, created by manipulating the DOM and matching MP3 files to certain keystrokes",
      imgUrl: `${pianokeysimage}`,
      reactNative: false,
      vanillajs: true,
      react: false,
      all: true,
    },
    {
      id: 4,
      title: "Pokedex",
      details:
        "A quirky Pokedex application that gives you information about a random pokemon, created in React by making API calls to a pokemon API endpoint",
      imgUrl: `${pokedexproject}`,
      reactNative: false,
      vanillajs: false,
      react: true,
      all: true,
    },
    {
      id: 5,
      title: "Reddit Redesign",
      details:
        "A redesign of the reddit homepage using React, utilizing an API that updates to randomly generated titles and images upon refresh",
      imgUrl: `${redditredesign}`,
      reactNative: false,
      vanillajs: false,
      react: true,
      all: true,
    },
    {
      id: 6,
      title: "Scottbot 4000",
      details:
        "One of my first projects whilst learning Javascript, a robot that completes tasks upon certain types of user input, mainly by manipulating the DOM",
      imgUrl: `${scottbot4000}`,
      reactNative: false,
      vanillajs: true,
      react: false,
      all: true,
    },
    {
      id: 7,
      title: "Thesaurus",
      imgUrl: `${thesaurusproject}`,
      details:
        "A Thesaurus app made using React, this application provides over 20 Thesaurus similies related to a chosen user query and displays the results to the user, built by making API alls to a Thesaurus API",
      reactNative: false,
      vanillajs: false,
      react: true,
      all: true,
    },
    // {
    //   id: 8,
    //   title: "Title of sideproject 8",
    //   imgUrl: "https://via.placeholder.com/400",
    //   reactNative: false,
    //   vanillajs: false,
    //   react: true,
    // },
    // {
    //   id: 9,
    //   title: "Title of sideproject 9",
    //   imgUrl: "https://via.placeholder.com/400",
    //   reactNative: false,
    //   vanillajs: true,
    //   react: false,
    // },
    // {
    //   id: 10,
    //   title: "Title of sideproject 10",
    //   imgUrl: "https://via.placeholder.com/400",
    //   reactNative: false,
    //   vanillajs: true,
    //   react: false,
    // },
  ];

  const filteredProjects = sideProjects.filter((project) => {
    return selectedFeature ? project[selectedFeature] : true;
  });

  return (
    <div className="side-projects-hero">
      <h1>Side Projects</h1>
      <div className="side-projects-outer-container">
        <div className="side-projects-inner-container">
          <div>
            <fieldset className="fieldset-container">
              <legend>Choose Javascript Language/Libraries:</legend>
              <div>
                <input
                  type="radio"
                  id="all"
                  name="language"
                  checked={selectedFeature === "all"}
                  onChange={() => handleToggle("all")}
                />
                <label htmlFor="all">All</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="Javascript"
                  name="language"
                  checked={selectedFeature === "vanillajs"}
                  onChange={() => handleToggle("vanillajs")}
                />
                <label htmlFor="Javascript">Javascript</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="React"
                  name="language"
                  checked={selectedFeature === "react"}
                  onChange={() => handleToggle("react")}
                />
                <label htmlFor="React">React JS</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="ReactNative"
                  name="language"
                  checked={selectedFeature === "reactNative"}
                  onChange={() => handleToggle("reactNative")}
                />
                <label htmlFor="ReactNative">React JS Native</label>
              </div>
            </fieldset>
            <div className="side-projects-container">
              {filteredProjects.map((sideProject) => (
                <SideProjectCard
                  key={sideProject.id}
                  imgUrl={sideProject.imgUrl}
                  title={sideProject.title}
                  details={sideProject.details}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideProjectsContainer;
