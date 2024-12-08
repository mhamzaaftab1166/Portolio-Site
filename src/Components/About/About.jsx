import React from "react";
import AboutImg from "../../assets/myavatar.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Muhammad Hamza Aftab{" "}
                  <span
                    style={{ fontSize: "15px" }}
                    className="text-yellow-500"
                  >
                    <small className="font-semibold">(Gold Medalist)</small>
                  </span>
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Experienced Software Engineer specialized in the MERN stack,
                  including{" "}
                  <span className="font-bold text-yellow-500">React.js</span>,
                  <span className="font-bold text-yellow-500">Next.js</span>,
                  and
                  <span className="font-bold text-yellow-500">
                    React Native
                  </span>
                  . With over a year of experience in{" "}
                  <span className="font-bold text-yellow-500">
                    web and mobile development
                  </span>
                  , I am skilled in building user-friendly websites and
                  applications using modern web standards and cutting-edge
                  techniques. Dedicated to delivering high-quality work and
                  constantly seeking new challenges to enhance my skills.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Email
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  <a
                    href="mailto:mhamzaatabb1166@gmail.com"
                    className="text-yellow-500 hover:text-white"
                  >
                    mhamzaatabb1166@gmail.com
                  </a>
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Contact
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  <a
                    href="tel:+971521096471"
                    className="text-yellow-500 hover:text-white"
                  >
                    +971 52 109 6471
                  </a>
                </p>
                <p className="text-sm md:text-md leading-tight">
                  <a
                    href="tel:+923134372928"
                    className="text-yellow-500 hover:text-white"
                  >
                    +92 313 43 72 928
                  </a>
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
