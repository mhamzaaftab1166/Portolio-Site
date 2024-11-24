import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
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
                  Muhammad Hamza Aftab
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I graduated with a Bachelor's in Information Technology from
                  National Textile University in Faisalabad, Pakistan, between
                  2020 and 2024. During my time there, I achieved a{" "}
                  <strong className="font-bold text-yellow-500">
                    CGPA of 3.55/4.0{" "}
                  </strong>
                  and was honored with the{" "}
                  <strong className="font-bold text-yellow-500">
                    Gold Medal{" "}
                  </strong>
                  for having the highest CGPA in my class. My studies provided
                  me with a strong foundation in software development, data
                  management, and networking, which has greatly contributed to
                  my expertise in the IT field.
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
                  mhamzaatabb1166@gmail.com
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
                  +971 52 109 6471
                </p>
                <p className="text-sm md:text-md leading-tight">
                  +92 313 43 72 928
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
