import React from "react";
import styled from "styled-components";

interface VideoPlayerPropTypes {
  video: string;
}

const VideoPlayer: React.FC<VideoPlayerPropTypes> = ({ video }) => {
  return (
    <div>
      <video
        src={video}
        id="video"
        className="videojs"
        controls
        preload="auto"
        width="1150"
        height="600"
      ></video>
    </div>
  );
};

export default VideoPlayer;
