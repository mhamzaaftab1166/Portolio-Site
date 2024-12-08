import React from "react";
import { useLocation } from "react-router-dom";

const VideoPage = () => {
  const location = useLocation();
  const videoUrl = location.state?.videoUrl; // Access the video URL passed from the ProjectCard

  if (!videoUrl) {
    return <p>No video available</p>;
  }

  return (
    <div className="mt-5 flex justify-center items-center min-h-screen bg-gray-900 p-4">
      <div className="relative w-full max-w-4xl">
        <video
          controls
          className="w-full h-auto rounded-lg shadow-lg"
          style={{
            maxWidth: "100%",
            maxHeight: "80vh", // Ensures the video height doesn't exceed 80% of the viewport height
          }}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoPage;
