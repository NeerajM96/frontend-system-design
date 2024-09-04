import React from "react";

const VideoPlayer = () => {
  return (
    <div>
      <iframe
        width="1000"
        height="500"
        src="https://www.youtube.com/embed/4xDzrJKXOOY?si=DkBMNFadG2PC8-6g"
        title="YouTube video player"
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
