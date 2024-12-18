



import React from 'react';
import './Vid.css'; // Add CSS styling for the video

const Video = () => {
  return (
    <div className="video-container">
 
      <video autoPlay loop muted playsInline className="video-background" poster="/vid/fall2.png">
        <source src="/vid/vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    
  );
};

export default Video;