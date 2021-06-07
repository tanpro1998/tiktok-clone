import React, { useRef, useState } from "react";
import "./Video.css";

import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'

function Video({ url, description, song,  channel, likes, shares, messages}) {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);

  const onvideoPress = () => {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };
  return (
    <div className="video">
      <video
        className="video__player"
        loop
        ref={videoRef}
        onClick={onvideoPress}
        src={url}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares}/>
    </div>
  );
}

export default Video;
