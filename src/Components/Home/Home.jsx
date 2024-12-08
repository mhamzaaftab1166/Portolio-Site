import React from "react";
import avatarImg from "../../assets/me1.png";
import TextChange from "../TextChange";

const Home = () => {
  const handleContactMeClick = () => {
    // Replace with your WhatsApp link
    const whatsappLink = "https://wa.me/971521096471"; // Your WhatsApp number in international format
    window.open(whatsappLink, "_blank"); // Open link in a new tab
  };

  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
          Experienced Software Engineer specialized in the MERN stack, including
          React.js, Next.js, and React Native.
        </p>
        <button
          onClick={handleContactMeClick} // Handle button click
          className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Contact Me
        </button>
      </div>
      <div>
        <img
          style={{
            height: "auto",
            maxWidth: "100%",
            width: "500px", // Adjust this as needed for your layout
          }}
          className="img-fluid ms-2" // Bootstrap class for responsive images
          src={avatarImg}
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default Home;
