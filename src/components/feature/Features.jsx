import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Features() {
  const features = [
    {
      icon: "M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z",
      title: "Web Development",
      desc: "Have completed a MERN stack development, Next js, Redux, Typescript, TailwindCSS, and other courses. Have developed various projects and pushed them to my Github repo.",
    },
    {
      icon: "M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55",
      title: "App Development",
      desc: "Have completed various app development courses like React Native and Android Studio. Have developed various projects for my company",
    },
    {
      icon: "M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z",
      title: "API Development",
      desc: "Have completed various APIs using Node js, Express js, and Spring Boot",
    },
  ];

  return (
    <div className="w-full mt-24 px-5 md:px-24" id="features">
      <div className="titleDiv">
        <p className="title">FEATURES</p>
        <h1 className="titleDesc">What I Do</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div className="flex flex-col h-[300px] max-w-[400px] pt-16 shadow-md bg-[#1c1e22] text-white transition-all duration-300 hover:shadow-lg hover:bg-[#0c0e10] hover:pt-2 sm:min-w-[350px]">
            <div className="px-10 py-2 max-h-[calc(100%-50px)] mb-5 overflow-hidden hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 576 512"
              >
                <path d={feature.icon} fill="#e81a6e" />
              </svg>
              <h3 className="my-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
              {/* <div className="py-2 my-2 flex justify-center">
                <div className="flex items-center space-x-2">
                  <span className="text-rose-600">See More</span> */}
              <FontAwesomeIcon icon={faArrowRight} color="#e81a6e" size="lg" />
              {/* </div>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
