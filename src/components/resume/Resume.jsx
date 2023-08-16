import React, { useState } from "react";
import "./resume.css";
import EducationResumeCard from "../cards/EducationResumeCard";
import OtherResumeCards from "../cards/OtherResumeCards";
import Skills from "../skills/Skills";
import { eduData, expData, achvData, skillsData } from "../data/MockData";

function Resume() {
  const [isActive, setIsActive] = useState("education");
  const [educations, setEducations] = useState(eduData);
  const [experience, setExperience] = useState(expData);
  const [achievements, setAchievements] = useState(achvData);
  const [skills, setSkills] = useState(skillsData);

  return (
    <div className="fluid-container" id="resume">
      <div className="titleDiv">
        <p className="title">18+ YEARS OF ACADEMIC AND WORK EXPERIENCE</p>
        <h1 className="titleDesc">My Resume</h1>
      </div>
      <div className="row mx-2">
        <div
          className={`col-3 titleCardDiv ${
            isActive === "education" ? "active" : ""
          }`}
          onClick={() => setIsActive("education")}
        >
          <p className="cardDesc">Education</p>
        </div>
        <div
          className={`col-3 titleCardDiv ${
            isActive === "skills" ? "active" : ""
          }`}
          onClick={() => setIsActive("skills")}
        >
          <p className="cardDesc">Professional Skills</p>
        </div>
        <div
          className={`col-3 titleCardDiv ${
            isActive === "experience" ? "active" : ""
          }`}
          onClick={() => setIsActive("experience")}
        >
          <p className="cardDesc">Experience</p>
        </div>
        <div
          className={`col-3 titleCardDiv ${
            isActive === "achievements" ? "active" : ""
          }`}
          onClick={() => setIsActive("achievements")}
        >
          <p className="cardDesc">Achievements</p>
        </div>
      </div>
      <div className="row mt-5">
        {isActive === "education" && (
          <>
            <div className="col-12 col-md-6 mb-5">
              <div className="row">
                {
                  <EducationResumeCard
                    data={educations}
                    header={{
                      period: "2020 - 2024",
                      title: "Educational Qualification",
                    }}
                  />
                }
              </div>
            </div>
            <div className="col-12 col-md-6 mb-5">
              <div className="row">
                {
                  <EducationResumeCard
                    data={educations}
                    header={{ period: "2020 - 2023", title: "Certificates" }}
                  />
                }
              </div>
            </div>
          </>
        )}
        {isActive === "skills" && (
          <>
            <div className="col-12 col-md-6 mb-5">
              <div className="row">
                <div className="col-12 mb-5">
                  <div className="resumeTitleDiv">
                    <p className="resumeTitle">TECH STACK</p>
                    <h1 className="resumeTitleDesc">Development Skill</h1>
                  </div>
                </div>
                {
                  <Skills
                    data={skills.slice(0, Math.ceil(skills.length / 2))}
                  />
                }
              </div>
            </div>
            <div className="col-12 col-md-6 mb-5">
              <div className="row">
                <div className="col-12 mb-5">
                  <div className="resumeTitleDiv">
                    <p className="resumeTitle">TECH STACK</p>
                    <h1 className="resumeTitleDesc">Development Skill</h1>
                  </div>
                </div>
                {<Skills data={skills.slice(Math.ceil(skills.length / 2))} />}
              </div>
            </div>
          </>
        )}
        {isActive === "experience" && (
          <>
            <div className="col-12 col-md-6 mb-5">
              <div className="row">
                {
                  <OtherResumeCards
                    data={experience}
                    header={{ period: "2023 - 20XX", title: "Job Experience" }}
                  />
                }
              </div>
            </div>
            <div className="col-12 col-md-6 mb-5">
              <div className="row">
                {
                  <OtherResumeCards
                    data={experience}
                    header={{
                      period: "20XX - 20XX",
                      title: "Trainer Experience",
                    }}
                  />
                }
              </div>
            </div>
          </>
        )}
        {isActive === "achievements" && (
          <>
            <div className="col-12 col-md-6 mb-5">
              <div className="row">
                {
                  <OtherResumeCards
                    data={achievements.slice(
                      0,
                      Math.ceil(achievements.length / 2)
                    )}
                    header={{
                      period: "2005 - Present",
                      title: "Accomplishments",
                    }}
                  />
                }
              </div>
            </div>
            <div className="col-12 col-md-6 mb-5">
              <div className="row">
                {
                  <OtherResumeCards
                    data={achievements.slice(
                      Math.ceil(achievements.length / 2)
                    )}
                    header={{
                      period: "2005 - Present",
                      title: "Accomplishments",
                    }}
                  />
                }
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Resume;
