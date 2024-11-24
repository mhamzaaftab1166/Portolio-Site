import React from "react";
import {
  FaCss3,
  FaFigma,
  FaGit,
  FaHtml5,
  FaJs,
  FaLaptopCode,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiExpress, SiJirasoftware, SiMysql, SiRedis } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiNetflixFill, RiNextjsFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { TbBrandTypescript } from "react-icons/tb";
import { GrServerCluster } from "react-icons/gr";
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <RiNextjsFill color="white" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaNodeJs color="#68A063" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiExpress color="white" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <TbBrandTypescript color="#3178C6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaGit color="#F05032" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMysql color="#00758F" size={50} />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaLaptopCode color="#B0B0B0" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">
                Full Stack Developer - MERN, Salina Limited Company
              </h2>
              <p className="text-sm leading-tight font-thin">
                July,2024 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- Developed web applications with React.js and Next.js.</li>
                <li>- Built mobile apps using React Native.</li>
                <li>
                  - Managed backend with Node.js and databases like MongoDB and
                  SQL.
                </li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <SiJirasoftware color="#0052CC" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">
                Software Engineer Interne, Qbatch
              </h2>
              <p className="text-sm leading-tight font-thin">
                June 2023 to July 2023
              </p>
              <ul className="text-sm p-2">
                <li>- Extracted data using web scraping.</li>
                <li>- Built user-friendly web apps (Full-stack).</li>
                <li>- Skilled in Git, GitHub, and SQL.</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <GrServerCluster color="#FF9900" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">
                Teacher's Assistant in DSA, NTU FSD
              </h2>
              <p className="text-sm leading-tight font-thin">
                January 2024 to June 2024
              </p>
              <ul className="text-sm p-2">
                <li>
                  - Explained complex Data Structures and Algorithms concepts.
                </li>
                <li>
                  - Assisted students with troubleshooting and problem-solving.
                </li>
                <li>- Supported teachers with management tasks.</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
