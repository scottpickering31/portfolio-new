import React from "react";
import VideoPlayer from "./VideoPlayer";
import "../App.css";
import imageofscott from "../images/image0.jpeg";
import certification from "../images/scott-certificate-codecademy.jpg";
import downArrow from "../images/1v7i5qfuab3dj137rn4eibmqii.png";
import MyJourneyImageGrid from "./MyJourneyImageGrid";
import PlatinumFreight from "../images/PlatinumFreight.jpg";
import LeafyLodge from "../images/TheLeafyLodge.jpg";
import DjCeej from "../images/DjCeej.jpg";
import CorbusBoards from "../images/CorbusBoards.jpg";
import dogrampforsuv from "../images/dogrampforsuv.jpg";

function MyJourneyContainer() {
  const gridImageObject = [
    {
      id: 1,
      title: "Platinum Freight",
      details: "Info about it",
      className: "gridimage top-right",
      source: `${PlatinumFreight}`,
      alt: 'alt=""',
    },
    {
      id: 2,
      title: "Leafy Lodge",
      details: "Info about it",
      className: "gridimage top-left",
      source: `${LeafyLodge}`,
      alt: 'alt=""',
    },
    {
      id: 3,
      title: "Dj Ceej",
      details: "Info about it",
      className: "gridimage bottom-right",
      source: `${DjCeej}`,
      alt: 'alt=""',
    },
    {
      id: 4,
      title: "Corbus Boards",
      details: "Info about it",
      className: "gridimage bottom-left",
      source: `${CorbusBoards}`,
      alt: 'alt=""',
    },
  ];

  return (
    <div className="my-journey-container">
      <h1>
        <u>My Journey</u>
      </h1>
      <h1 className="my-journey-title">
        <u>2015</u>
      </h1>
      <div className="my-journey-2015-container">
        <div className="grid-images-container">
          <img src={dogrampforsuv} className="dogramp-image" />
        </div>
        <div className="my-journey-paragraph-2015">
          <h2>
            The beginning! Personal Wordpress website builds and SEO
            optimisation
          </h2>
          <p>
            My entry into the world of web creation began in 2015 when I delved
            into crafting personal SEO-driven websites using WordPress.
            <br />
            <br />
            <br />
            Through ventures in affiliate marketing with Amazon and Google
            AdSense, I gained invaluable insights into the foundational elements
            of web technologies.
            <br />
            <br />
            <br />
            Hosting my sites on platforms like HostGator and securing domain
            names through Uniregistry, one particular success story emerged—my
            website dedicated to our beloved furry friends, dogs.
            <br />
            <br />
            The title, however, was so blatently keyword driven that it hurts to
            look at now... www.dogrampforsuv.com -- eugh! You live and you
            learn!
          </p>
        </div>
      </div>
      <img src={downArrow} className="down-arrow" />
      <h1 className="my-journey-title">
        <u>2017</u>
      </h1>
      <div className="my-journey-container-2017">
        <div className="my-journey-paragraph-2017">
          <h2>Branching Out! </h2>
          <p>
            By 2017, I expanded my horizons by offering freelance web creation
            services for professional clients. The SEO skills I garnered
            regarding creating an online presence, I decided to seek out small
            businesses in my local area in need of their first company website.
            <br />
            <br />
            <br />
            Working with a diverse clientele, from DJs seeking an online
            presence to freight forwarding companies and passionate gardening
            bloggers, my client list was growing substantially.
            <br />
            <br />
            <br />I honed my skills in catering to varied needs, fostering a
            deeper understanding of design and functionality. It was towards the
            end of 2020 and start of 2021 that I stumbled upon the web developer
            tools and really started to try and understand what was going on
            'under the hood' of web development.
          </p>
        </div>
        <div className="grid-images-container">
          {gridImageObject.map((gridImage) => (
            <MyJourneyImageGrid
              key={gridImage.id}
              source={gridImage.source}
              title={gridImage.title}
              details={gridImage.details}
              className={gridImage.className}
              alt={gridImage.alt}
            />
          ))}
        </div>
      </div>
      <img src={downArrow} className="down-arrow" />
      <h1 className="my-journey-title">
        <u>2021</u>
      </h1>
      <div className="my-journey-paragraph-2021-container">
        <div>
          <VideoPlayer />
        </div>
        <div className="my-journey-paragraph-2021">
          <h2>Hello World! My first console.log statement!</h2>
          <p>
            It was in 2021 that my trajectory took a pivotal turn. I had always
            naively assumed that understanding and becomming a software engineer
            was the equivalent to entering the Matrix... 1's and 0's would
            cascade the screen and immediate confusion would set in. After doing
            thorough research, I realised that this wasn't exactly the case.
            <br />
            <br />
            <br />
            Enrolling in Codecademy's Full Stack Software Engineering course in
            January 2021 became the cornerstone of my transition into the realm
            of coding and software development. I was immediately hooked and
            began excitedly working through the fundamentals of HTML, CSS and
            Javascript.
            <br />
            <br />
            <br />
            My slightly over-enthusiastic wife decided to film my first moment
            logging some random integers to the console... And... helpfully
            added a rather over the top sparkling filter to the video you see...
            Thanks for that babe!
          </p>
        </div>
      </div>
      <img src={downArrow} className="down-arrow" />
      <h1 className="my-journey-title">
        <u>2023</u>
      </h1>
      <div className="my-journey-paragraph-2023">
        <h2>
          Certified! Finishing my CodeCademy course and receiving my long
          awaited certification
        </h2>
        <p>
          Fast forward to 2023, 1 and a half years of dedicating any and all
          spare time I had focused solely on improving as a software developer,
          I achieved my certification as a Full Stack Engineer from Codecademy.
          <br />
          <br />
          The learning and growth I have achieved during that year and a half
          have been eye opening for me. Embracing the hardships, the struggles
          and mental blocks that I battled through in that year and a half, the
          parts I didn't understand and the parts I did, the stepping away from
          problems that I had spent hours trying to debug, only to return to
          find the most obvious solution staring back at me. One thing has
          truely remained constant throughout... I have enjoyed EVERY step of
          the journey!
        </p>
      </div>
      <div className="my-journey-images-2023">
        <img src={imageofscott} className="image-of-scott" />
        <img src={certification} className="image-of-scott" />
      </div>
      <div className="my-journey-paragraph-2023">
        <p>
          Each day, I challenge myself on platforms like LeetCode and
          HackerRank, diving into intricate JavaScript problems to fortify my
          problem-solving abilities and fine tune any weaknesses in my coding
          knowledge. This journey has been somewhat of an evolution of character
          for me, from crafting websites that resonate with clients to embracing
          the intricacies of software engineering. It's a passion that has been
          marked by my relentless pursuit for growth and learning. I am even
          more excited to grow even futher and to transform my experience into
          meaningful contributions and solutions.
        </p>
      </div>
    </div>
  );
}

export default MyJourneyContainer;
