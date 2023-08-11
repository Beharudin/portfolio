import React, { useState } from "react";
import "./project.css";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Project() {
  const [projects, setProjects] = useState([
    {
      img: "/img/image.jpg",
      title: "IPL-WIN-PREDICTOR",
      github: "www.github.com",
      link: "www.google.com",
      desc: "Eiusmod ea ex id non aute nisi reprehenderit nostrud dolor officia aliqua est. Mollit in aliqua id commodo sunt non id veniam. Elit tempor culpa elit anim ex est nulla in commodo incididunt.",
    },
    {
      img: "/img/image.jpg",
      title: "IPL-WIN-PREDICTOR",
      github: "www.github.com",
      link: "www.google.com",
      desc: "Eiusmod ea ex id non aute nisi reprehenderit nostrud dolor officia aliqua est. Mollit in aliqua id commodo sunt non id veniam. Elit tempor culpa elit anim ex est nulla in commodo incididunt.",
    },
    {
      img: "/img/image.jpg",
      title: "IPL-WIN-PREDICTOR",
      github: "www.github.com",
      link: "www.google.com",
      desc: "Eiusmod ea ex id non aute nisi reprehenderit nostrud dolor officia aliqua est. Mollit in aliqua id commodo sunt non id veniam. Elit tempor culpa elit anim ex est nulla in commodo incididunt.",
    },
    {
      img: "/img/image.jpg",
      title: "IPL-WIN-PREDICTOR",
      github: "www.github.com",
      link: "www.google.com",
      desc: "Eiusmod ea ex id non aute nisi reprehenderit nostrud dolor officia aliqua est. Mollit in aliqua id commodo sunt non id veniam. Elit tempor culpa elit anim ex est nulla in commodo incididunt.",
    },
    {
      img: "/img/image.jpg",
      title: "IPL-WIN-PREDICTOR",
      github: "www.github.com",
      link: "www.google.com",
      desc: "Eiusmod ea ex id non aute nisi reprehenderit nostrud dolor officia aliqua est. Mollit in aliqua id commodo sunt non id veniam. Elit tempor culpa elit anim ex est nulla in commodo incididunt.",
    },
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
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>

                  <a
                    type="button"
                    className="btn btn-floating rounded-circle mx-1"
                    href={project.link}
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </div>
              </div>
              <div className="mt-3">
                <p>{project.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
