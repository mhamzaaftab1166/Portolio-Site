import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import saferide from "../../assets/saferide.mp4";
import saferideImage from "../../assets/saferide.jpeg";
import gameshub from "../../assets/gamehub.jpeg";
import movix from "../../assets/movix.jpeg";
import kr from "../../assets/kr.jpeg";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="KR Institute"
          main="Developed a professional, responsive website for KR Institute as a freelance project. The website highlights the institute's offerings, ensuring an intuitive and user-friendly experience through modern web development technologies."
          frontendCode="https://github.com/contact-igt/krinstitute-frontend"
          url={"https://krinstitutions.vercel.app/"}
          image={kr}
        />
        <ProjectCard
          title="SafeRide"
          main="Final Year Project-SafeRide is an innovative ride-sharing app. It provides a business owner panel to manage riders and vehicles, offers seamless ride experiences and real-time tracking for users, and implements guardian oversight for safety. Advanced technology ensures live ride monitoring for guardians, providing a safe, efficient, and reliable solution. Developed this app using React Native, Node.js, Express.js, MongoDB, Socket.io, and Google Maps"
          frontendCode="https://github.com/mhamzaaftab1166/SafeRide-FYP"
          backendCode="https://github.com/mhamzaaftab1166/SafeRide-FYP-Backend"
          image={saferideImage}
          video={saferide}
        />

        <ProjectCard
          title="Gameshub"
          main="I created a game store front-end using Chakra UI for a clean and responsive design. For data fetching, I used React Query, ensuring efficient API calls and caching. Zustand was employed for state management, enabling seamless data handling across components."
          frontendCode={"https://github.com/mhamzaaftab1166/games-hub"}
          url={"https://games-hub-ruby.vercel.app/"}
          image={gameshub}
        />
        <ProjectCard
          title="Movix"
          main="Movix is a movie discovery web app that showcases trending dramas,
          trailers, and ratings. It is built with React and a cutting-edge tech stack to
          provide a smooth and dynamic user experience."
          url={"https://movix-bhattihamza0099-gmailcom.vercel.app/"}
          image={movix}
          frontendCode={"https://github.com/mhamzaaftab1166/movix-react"}
        />
      </div>
    </div>
  );
};

export default Projects;
