import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faGithub,
  faJava,
  faLinkedinIn,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
        <div className="col-12 col-sm-7 py-5 p-sm-2">
          <h5 className="greeting">Akkam Nagayaa 👀🙋‍♂️</h5>
          <div className="homeTitleDiv">
            <h1 className="homeTitle">
              Hi, I'm{" "}
              <span style={{ color: "#ff014d" }}>Beharudin Mohammed</span>
            </h1>
            <h3 className="homeTitleDesc">
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
            <p className="desc">
              I am a passionate MERN stack developer and machine learning
              enthusiast. With a strong foundation in web development and a keen
              eye for data, I create innovative solutions that bridge technology
              and user experience.
            </p>
          </div>
          <div className="row mt-3 mt-sm-5 pt-3 pt-sm-5">
            <div className="col-12 col-sm-6 mb-4 mb-sm-0">
              <h6>FIND ME ON</h6>
              <div className="cardDiv">
                <div className="smallCard mr-3">
                  <FontAwesomeIcon icon={faGithub} />
                </div>
                <div className="smallCard mr-3">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="smallCard mr-3">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 mb-4 mb-sm-0">
              <h6>BEST WEB STACK</h6>
              <div className="cardDiv">
                <div className="smallCard mr-3">
                  <FontAwesomeIcon icon={faReact} />
                </div>
                <div className="smallCard mr-3">
                  <FontAwesomeIcon icon={faNodeJs} />
                </div>
                <div className="smallCard mr-3">
                  <FontAwesomeIcon icon={faJava} />
                </div>
                <div className="smallCard mr-3">
                  <FontAwesomeIcon icon={faBootstrap} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-4 my-2 mx-sm-5">
          <img className="rightImg" src="/img/user.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
