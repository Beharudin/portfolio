import React, { useState } from "react";
import "./project.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function Project() {
  const [projects, setProjects] = useState([
    {
      img: "/img/questions.jpg",
      title: "UNIVERSITY QUESTIONS",
      github: "",
      link: "",
      desc: "For my final year project at the university, I created a comprehensive solution that encompassed both a mobile app and a website, utilizing Django and MySQL for backend development, while leveraging Android Studio, Java, and XML for the app's development.",
    },
    {
      img: "/img/loan.jpg",
      title: "LOAN ORIGINATION SYSTEM",
      github: "",
      link: "",
      desc: "I collaborated with my team to develop a complex loan origination system, using HTML, CSS, Bootstrap, Node.js, Express, React.js, and MySQL. This project highlights my effective teamwork and role in creating streamlined systems for critical processes.",
    },
    {
      img: "/img/bakkalcha.jpg",
      title: "BAKKALCHA FEDIS",
      github: "https://github.com/Beharudin/MyProjects/tree/bakkalcha-client",
      link: "https://bakkalcha-fadis-d50p.onrender.com/",
      desc: "I designed and developed a responsive web application named Bakkalcha Fedis for my client, employing React, Node.js, Express, MySQL, CSS, HTML, and Bootstrap. This project showcases my ability to create dynamic and user-friendly solutions that meet client needs.",
    }
  ]);

  return (
    <div className="fluid-container" id="projects">
      <div className="titleDiv">
        <p className="title">CHECK THESE OUT ON MY GITHUB</p>
        <h1 className="titleDesc">My Projects</h1>
      </div>
      <div className="row">
        {projects.map((project) => (
          <div className="col-12 col-sm-6 col-lg-4 my-4">
            <div className="cardDiv">
              <div className="imageDiv">
                <img src={project.img} alt="" />
              </div>
              <div className="d-flex align-items-center mt-5">
                <h6 className="projectTitle">{project.title}</h6>
                <div className="projectBtn">
                  <a
                    type="button"
                    className="btn btn-floating  rounded-circle mx-1"
                    href={project.github}
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>

                  <a
                    type="button"
                    className="btn btn-floating rounded-circle mx-1"
                    href={project.link}
                  >
                    <FontAwesomeIcon icon={faGlobe} />
                  </a>
                </div>
              </div>
              <div className="mt-3">
                <p >{project.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
