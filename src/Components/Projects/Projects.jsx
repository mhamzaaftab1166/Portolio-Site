import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import saferide from "../../assets/saferide.mp4";
import saferideImage from "../../assets/saferide.jpeg";
import gameshub from "../../assets/gamehub.jpeg";
import movix from "../../assets/movix.jpeg";
import kr from "../../assets/kr.jpeg";
import uaeicon from "../../assets/uaeicon.jpeg";
import share from "../../assets/share.jpeg";
import auction from "../../assets/auction.jpeg";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="UAE Icons"
          main="As Front-End Lead on the UAE Icons project by Salina Limited, I
                    worked on developing a car-selling app, integrating a bidding
                    feature. I utilized Next.js for the front end, Redux for state
                    management, and Bootstrap to create a responsive design
                    based on Figma specifications, ensuring seamless API
                    integration"
          url={"https://uaeicons.com/"}
          image={uaeicon}
        />
        <ProjectCard
          title="GirGir Auction"
          main="GirGir Auction, a Salina Limited product, enables live bidding, pre-bids, and direct car purchases. As the Frontend Lead, I developed the platform using Next.js, Redux, Bootstrap, and CSS modules to ensure responsiveness and a seamless user experience."
          url={"https://girgirauction.com/"}
          image={auction}
        />
        <ProjectCard
          title="KR Institute"
          main="Developed a professional, responsive website for KR Institute as a freelance project. The website highlights the institute's offerings, ensuring an intuitive and user-friendly experience through modern web development technologies."
          url={"https://krinstitute.sg/"}
          image={kr}
        />
        <ProjectCard
          title="SafeRide"
          main="Final Year Project-SafeRide is an innovative ride-sharing app. It provides a business owner panel to manage riders and vehicles, offers seamless ride experiences and real-time tracking for users, and implements guardian oversight for safety. Advanced technology ensures live ride monitoring for guardians, providing a safe, efficient, and reliable solution. Developed this app using React Native, Node.js, Express.js, MongoDB, Socket.io, and Google Maps"
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
        <ProjectCard
          title="Share with us"
          main="Upload your document and generate a secure shareable link with ease. Share the link with anyone, and they can download the file directly. Built using React.js with Chakra UI for a smooth interface, and powered by Node.js and MongoDB for secure file handling. Simplify document sharing today!"
          image={share}
          frontendCode={"https://github.com/mhamzaaftab1166/file-sharing-react"}
          backendCode={"https://github.com/mhamzaaftab1166/file-sharinng-api"}
        />
      </div>
    </div>
  );
};

export default Projects;
