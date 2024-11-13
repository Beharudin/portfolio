import React, { useState } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function Project() {
  const projects = [
    {
      img: "/img/questions.jpg",
      title: "UNIVERSITY QUESTIONS",
      github: "#",
      link: "#",
      desc: "For my final year project at the university, I created a comprehensive solution that encompassed both a mobile app and a website, utilizing Django and MySQL for backend development, while leveraging Android Studio, Java, and XML for the app's development.",
    },
    {
      img: "/img/loan.jpg",
      title: "LOAN ORIGINATION SYSTEM",
      github: "#",
      link: "#",
      desc: "I collaborated with my team to develop a complex loan origination system, using React js, CSS, Bootstrap, Node.js, Express, and MySQL. This project highlights my effective teamwork and role in creating streamlined systems for critical processes.",
    },
    {
      img: "/img/bakkalcha-fadis.png",
      title: "BAKKALCHA FEDIS",
      github: "https://github.com/Beharudin/MyProjects/tree/bakkalcha-client",
      link: "https://bakkalcha-fadis-d50p.onrender.com/",
      desc: "I designed and developed a responsive web application named Bakkalcha Fedis for my client, employing React, Node.js, Express, MySQL, CSS, HTML, and Bootstrap. This project showcases my ability to create dynamic and user-friendly solutions that meet client needs.",
    },
  ];

  return (
    <div className="w-full mt-24 px-5 md:px-24" id="projects">
      <div className="titleDiv">
        <p className="title">CHECK THESE OUT ON MY GITHUB</p>
        <h1 className="titleDesc">My Projects</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div className="flex flex-col h-[500px] max-w-[400px] p-8 shadow-lg bg-[#1c1e22] text-white transition-all duration-300 hover:shadow-2xl hover:bg-gradient-to-b hover:from-[#0c0e10] hover:to-[#1c1e22] overflow-hidden hover:pt-[25px]">
            <div className="h-[200px]">
              <img
                src={project.img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center mt-5">
              <h6 className="text-lg font-semibold text-rose-600">
                {project.title}
              </h6>
              <div className="flex ml-auto space-x-2">
                <a
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGlobe} />
                </a>
              </div>
            </div>
            <div className="mt-3">
              <p>{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
