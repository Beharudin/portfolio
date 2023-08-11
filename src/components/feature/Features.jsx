import React, { useState } from "react";
import "./features.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Features() {
  const [features, setFeatures] = useState([
    {
      icon: "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z",
      title: "Project Management",
      desc: "Want to gain real-life experience of managing a complete software project cycle.",
    },
    {
      icon: "M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z",
      title: "Web Development",
      desc: "Have completed a MERN stack development, Redux, DJango, Bootstrap and another courses. Have developed projects and hosted them on my github.",
    },
    {
      icon: "M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55",
      title: "App Development",
      desc: "Have completed various app development courses like React Native and Android Studio. Have developed various projects for my company",
    },
    {
      icon: "M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z",
      title: "Desktop application development",
      desc: "Have completed various desktop app development courses like Java using Netbeans and Eclipse",
    },
    {
      icon: "M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z",
      title: "Data Analyst",
      desc: "Learned data extraction,cleaning, pattern identification & web scrapping skills and trained the ML models. And also want to do MTECH in Data Science",
    },
  ]);
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
    <path d="" />
  </svg>;

  return (
    <div className="fluid-container" id="features">
      <div className="titleDiv">
        <p className="title">FEATURES</p>
        <h1 className="titleDesc">What I Do</h1>
      </div>
      <div className="row">
        {features.map((feature) => (
          <div className="col-12 col-sm-3 m-2 m-sm-5">
            <div className="cardDiv">
              <div className="cardContent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 576 512"
                >
                  <path d={feature.icon} fill="#ff014d" />
                </svg>
                <h3 className="my-3">{feature.title}</h3>
                <p className="cardDesc">{feature.desc}</p>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  color="#ff014d"
                  size="lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
