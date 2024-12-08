import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import bannerImg from "../../assets/photo-C8q0KQHG.webp";

// Modal component for confirming front-end or back-end code redirection
const Modal = ({ show, onClose, onConfirmFrontend, onConfirmBackend }) => {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-10"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-lg font-semibold mb-4 text-black">
          Choose Source Code
        </h3>
        <p className="mb-4 text-black">
          Both front-end and back-end code are available. Which one would you
          like to view?
        </p>
        <div className="flex justify-around">
          <button
            onClick={() => {
              onConfirmFrontend();
              onClose();
            }}
            className="px-6 py-2 bg-[#465697] text-white rounded-lg"
          >
            Front-End Code
          </button>
          <button
            onClick={() => {
              onConfirmBackend();
              onClose();
            }}
            className="px-6 py-2 bg-[#465697] text-white rounded-lg"
          >
            Back-End Code
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({
  title,
  main,
  frontendCode,
  backendCode,
  image,
  url,
  video, // New prop for the video URL
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false); // State for showing the modal
  const navigate = useNavigate(); // Initialize React Router navigate function

  const handleShowMore = () => {
    setIsExpanded(!isExpanded);
  };

  // Approximate the max character count for 3 lines of text (you may adjust this threshold)
  const maxLength = 150; // Adjust this value based on your design (rough estimate of 3 lines)

  // Check if the text exceeds the maximum length (3 lines) to display the button
  const shouldShowButton = main.length > maxLength;

  const handleSourceCodeClick = () => {
    if (!frontendCode && !backendCode) {
      alert("No code available");
    } else if (frontendCode && backendCode) {
      // Both front-end and back-end code are available, show modal
      setShowModal(true);
    } else if (frontendCode) {
      // Only front-end code is available
      window.location.href = frontendCode;
    } else if (backendCode) {
      // Only back-end code is available
      window.location.href = backendCode;
    }
  };

  const handleDemoClick = () => {
    if (url) {
      // Redirect to the demo URL if it exists
      window.location.href = url;
    } else if (video) {
      // Navigate to the video page or play the video
      navigate("/video", { state: { videoUrl: video } });
    } else {
      alert("No demo available.");
    }
  };

  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img
        className="p-4"
        src={image ? image : bannerImg}
        alt=""
        style={{ width: "100%", height: "200px" }}
      />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p
        className={`px-4 text-sm md:text-md leading-tight ${
          !isExpanded && shouldShowButton ? "line-clamp-3" : "" // Apply truncation only if not expanded
        }`}
      >
        {main}
      </p>
      {shouldShowButton && (
        <button
          onClick={handleShowMore}
          className="text-sm md:text-md text-[#465697] font-semibold hover:underline px-4 py-2"
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      )}
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        <button
          onClick={handleDemoClick} // Handle Demo button click
          className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Demo
        </button>
        <button
          onClick={handleSourceCodeClick} // Handle Source Code button click
          className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Source Code
        </button>
      </div>

      {/* Modal for confirming front-end or back-end selection */}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirmFrontend={() => (window.location.href = frontendCode)}
        onConfirmBackend={() => (window.location.href = backendCode)}
      />
    </div>
  );
};

export default ProjectCard;
