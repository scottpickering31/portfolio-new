import React, { useState } from "react";
import ReactPlayer from "react-player";
import videoMOV from "../images/scott-journey.mp4";
import "../App.css";

function VideoPlayer() {
  const containerStyle = {
    borderRadius: "10px",
  };
  const [isPlaying, setIsPlaying] = useState(true);

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div onClick={handleTogglePlay}>
      <ReactPlayer
        style={containerStyle}
        url={videoMOV}
        playing={isPlaying}
        loop
        width="350px"
        height="350px"
        muted
      />
    </div>
  );
}

export default VideoPlayer;
