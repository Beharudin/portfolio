import React, { useState } from "react";
import EducationResumeCard from "../cards/EducationResumeCard";
import OtherResumeCards from "../cards/OtherResumeCards";
import {
  achvData,
  certificationData,
  eduData,
  expData,
  skillsData,
} from "../data/MockData";
import Skills from "../skills/Skills";
import "./resume.css";

function Resume() {
  const [isActive, setIsActive] = useState("experience");

  const renderCardContent = (type) => {
    switch (type) {
      case "education":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2">
            <EducationResumeCard
              data={eduData}
              header={{
                period: "2004 - 2021",
                title: "Educational Qualification",
              }}
            />
            <EducationResumeCard
              data={certificationData}
              header={{ period: "2020 - 2023", title: "Certificates" }}
            />
          </div>
        );
      case "skills":
        return (
          <div className="w-full grid grid-cols-1 md:grid-cols-2">
            <div>
              <div className="resumeTitleDiv">
                <p className="resumeTitle">TECH STACK</p>
                <h1 className="resumeTitleDesc">Development Skill</h1>
              </div>
              <Skills
                data={skillsData.slice(0, Math.ceil(skillsData.length / 2))}
              />
            </div>
            <div>
              <div className="resumeTitleDiv">
                <p className="resumeTitle">TECH STACK</p>
                <h1 className="resumeTitleDesc">Development Skill</h1>
              </div>
              <Skills
                data={skillsData.slice(Math.ceil(skillsData.length / 2))}
              />
            </div>
          </div>
        );
      case "experience":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2">
            <OtherResumeCards
              data={expData.slice(0, Math.ceil(expData.length / 2))}
              header={{ period: "01/2022 - 06/2022", title: "Job Experience" }}
            />
            <OtherResumeCards
              data={expData.slice(Math.ceil(expData.length / 2))}
              header={{ period: "06/2022 - Present", title: "Job Experience" }}
            />
          </div>
        );
      case "achievements":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2">
            <OtherResumeCards
              data={achvData.slice(0, Math.ceil(achvData.length / 2))}
              header={{ period: "2017 - 2022", title: "Accomplishments" }}
            />
            <OtherResumeCards
              data={achvData.slice(Math.ceil(achvData.length / 2))}
              header={{ period: "2022 - 2023", title: "Accomplishments" }}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full mt-24 px-5 md:px-24" id="resume">
      <div className="titleDiv">
        <p className="title">18+ YEARS OF ACADEMIC AND WORK EXPERIENCE</p>
        <h1 className="titleDesc">My Resume</h1>
      </div>
      <div className="flex flex-wrap justify-between mb-5">
        {["experience", "skills", "education", "achievements"].map(
          (section) => (
            <div
              key={section}
              className={`w-full sm:w-1/4 cursor-pointer titleCardDiv ${
                isActive === section ? "active" : ""
              }`}
              onClick={() => setIsActive(section)}
            >
              <p className="text-lg">
                {" "}
                {section.charAt(0).toUpperCase() + section.slice(1)}{" "}
              </p>
            </div>
          )
        )}
      </div>
      <div className="flex flex-wrap gap-5">{renderCardContent(isActive)}</div>
    </div>
  );
}

export default Resume;
