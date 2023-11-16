import React from "react";
import VideoPlayer from "./VideoPlayer";
import "../App.css";
import imageofscott from "../images/image0.jpeg";
import certification from "../images/scott-certificate-codecademy.png";

function MyJourneyContainer() {
  return (
    <div className="my-journey-container">
      <h1>My Journey</h1>
      <div>
        <p className="my-journey-paragraph-one">
          <h1>2015</h1>
          Lorem ipsum dolor sit amet. Eum alias sunt 33 cupiditate voluptas aut
          autem aliquam aut facere illo et dolores repellendus. In saepe
          voluptas non consequatur laboriosam et nobis nihil sit incidunt
          excepturi.
          <br />
          <br />
          <br />
          Ad harum voluptatibus qui totam Quis ad maxime saepe sed aspernatur
          sapiente eos ducimus internos est voluptatem internos. Non dolores
          illum qui odio molestias non Quis similique non porro dolorum aut
          voluptate dolore ea recusandae ducimus.
          <br />
          <br />
          <br />
          Ad harum voluptatibus qui totam Quis ad maxime saepe sed aspernatur
          sapiente eos ducimus internos est voluptatem internos. Non dolores
          illum qui odio molestias non Quis similique non porro dolorum aut
          voluptate dolore ea recusandae ducimus.
        </p>
      </div>
      <div>
        <p className="my-journey-paragraph-one">
          <h1>2017</h1>
          Lorem ipsum dolor sit amet. Eum alias sunt 33 cupiditate voluptas aut
          autem aliquam aut facere illo et dolores repellendus. In saepe
          voluptas non consequatur laboriosam et nobis nihil sit incidunt
          excepturi.
          <br />
          <br />
          <br />
          Ad harum voluptatibus qui totam Quis ad maxime saepe sed aspernatur
          sapiente eos ducimus internos est voluptatem internos. Non dolores
          illum qui odio molestias non Quis similique non porro dolorum aut
          voluptate dolore ea recusandae ducimus.
          <br />
          <br />
          <br />
          Ad harum voluptatibus qui totam Quis ad maxime saepe sed aspernatur
          sapiente eos ducimus internos est voluptatem internos. Non dolores
          illum qui odio molestias non Quis similique non porro dolorum aut
          voluptate dolore ea recusandae ducimus.
        </p>
      </div>
      <div className="my-journey-introduction">
        <div>
          <VideoPlayer />
        </div>
        <p className="my-journey-paragraph-one">
          <h1>2021</h1>
          Lorem ipsum dolor sit amet. Eum alias sunt 33 cupiditate voluptas aut
          autem aliquam aut facere illo et dolores repellendus. In saepe
          voluptas non consequatur laboriosam et nobis nihil sit incidunt
          excepturi.
          <br />
          <br />
          <br />
          Ad harum voluptatibus qui totam Quis ad maxime saepe sed aspernatur
          sapiente eos ducimus internos est voluptatem internos. Non dolores
          illum qui odio molestias non Quis similique non porro dolorum aut
          voluptate dolore ea recusandae ducimus.
          <br />
          <br />
          <br />
          Ad harum voluptatibus qui totam Quis ad maxime saepe sed aspernatur
          sapiente eos ducimus internos est voluptatem internos. Non dolores
          illum qui odio molestias non Quis similique non porro dolorum aut
          voluptate dolore ea recusandae ducimus.
        </p>
      </div>
      <p className="my-journey-paragraph-one">
        <h1>2023</h1>
        Et magnam quia nam nihil debitis est sunt fugiat eos aliquam fuga ea
        sequi illo. Aut iure assumenda aut excepturi dignissimos ea ratione
        soluta quo enim similique. Non tempora perferendis ab voluptas
        repudiandae aut accusantium unde aut consectetur vero sit dolorem beatae
        et quisquam earum.
      </p>
      <div className="my-journey-images">
        <img src={imageofscott} className="image-of-scott" />
        <img src={certification} className="image-of-scott" />
      </div>
      <p className="my-journey-paragraph-one">
        Quo architecto saepe est excepturi molestiae aut dolorum atque eos
        provident galisum. Ut quod blanditiis ut sunt atque ea Quis magnam ea
        nihil atque eos corrupti ullam qui voluptatem ipsa et distinctio
        distinctio.
      </p>
    </div>
  );
}

export default MyJourneyContainer;
