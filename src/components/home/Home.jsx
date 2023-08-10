import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const titles = [
  "A Professional Coder",
  "A Full Stack Developer",
  "A MERN Developer",
  "A Django Developer",
  "A React Lover",
  "A Java Lover",
];

function Home() {
  return (
    <div className="fluid-container" id="home">
      <div className="row mb-5">
        <div className="col-12 col-sm-7 p-2">
          <h5 className="greeting">Akkam Nagayaa 👀🙋‍♂️</h5>
          <div className="titleDiv">
            <h1 className="title">
              Hi, I'm{" "}
              <span style={{ color: "#ff014d" }}>Beharudin Mohammed</span>
            </h1>
            <h3 className="titleDesc">
              <Typewriter
                options={{
                  strings: titles,
                  autoStart: true,
                  loop: true,
                  delay: 10,
                  deleteSpeed: 10,
                }}
              />
            </h3>
            <p>
              I am a passionate MERN stack developer and machine learning
              enthusiast. With a strong foundation in web development and a keen
              eye for data, I create innovative solutions that bridge technology
              and user experience.
            </p>
          </div>
          <div className="row mt-5 pt-5">
            <div className="col-12 col-sm-6">
              <h6>FIND ME ON</h6>
              <div className="cardDiv">
                <div className="smallCard mr-3">
                  <FontAwesomeIcon icon={faReact} />
                </div>
                <div className="smallCard mr-3">
                  <FontAwesomeIcon icon={faReact} />
                </div>
                <div className="smallCard mr-3">
                  <FontAwesomeIcon icon={faReact} />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <h6>BEST WEB STACK</h6>
              <div className="cardDiv">
                <div className="smallCard mr-3">
                  <FontAwesomeIcon icon={faReact} />
                </div>
                <div className="smallCard mr-3">
                  <FontAwesomeIcon icon={faReact} />
                </div>
              <div className="smallCard mr-3">
                <FontAwesomeIcon icon={faReact} />
              </div>
              <div className="smallCard mr-3">
                <FontAwesomeIcon icon={faReact} />
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-4 ml-sm-2 mx-2 mx-sm-5">
          <img className="rightImg" src="/img/user.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
