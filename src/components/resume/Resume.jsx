import React, { useState } from "react";
import "./resume.css";
import ResumeCards from "../cards/ResumeCards";
import Skills from "../skills/Skills";

function Resume() {
  const [isActive, setIsActive] = useState("education");
  const [educations, setEducations] = useState([
    {
      title: "BTech in Information Technology",
      school: "Veermata Jijabai Technological Institute (2020 - 2024)",
      grade: "96.3%",
      desc: "Studied IT related subjects like Operating Systems, DBMS,OOPS, ML, Web Development, AI, DSA, Compiler Design etc.",
    },
    {
      title: "Higher Secondary Education",
      school: "Rustomjee International School and Junior College (2018 - 2020)",
      grade: "88.3%",
      desc: "Studied in this school from 11th to 12th std. HSC Subjects: PCM, English, Electrical Maintenance, Environment Education.",
    },
    {
      title: "Primary & Secondary School Education",
      school: "Rustomjee International School (2005 - 2018)",
      grade: "96.3%",
      desc: "Studied in this school from Nursery to 10th std. SSC Subjects: English, Hindi-French, Marathi, Maths, Science, Social Sciences.",
    },
  ]);
  const [experience, setExperience] = useState([
    {
      title: "BTech in Information Technology",
      school: "Veermata Jijabai Technological Institute (2020 - 2024)",
      grade: "96.3%",
      desc: "Studied IT related subjects like Operating Systems, DBMS,OOPS, ML, Web Development, AI, DSA, Compiler Design etc.",
    },
    {
      title: "Higher Secondary Education",
      school: "Rustomjee International School and Junior College (2018 - 2020)",
      grade: "88.3%",
      desc: "Studied in this school from 11th to 12th std. HSC Subjects: PCM, English, Electrical Maintenance, Environment Education.",
    },
    {
      title: "Primary & Secondary School Education",
      school: "Rustomjee International School (2005 - 2018)",
      grade: "96.3%",
      desc: "Studied in this school from Nursery to 10th std. SSC Subjects: English, Hindi-French, Marathi, Maths, Science, Social Sciences.",
    },
  ]);
  const [achievements, setAchievements] = useState([
    {
      title: "BTech in Information Technology",
      school: "Veermata Jijabai Technological Institute (2020 - 2024)",
      grade: "96.3%",
      desc: "Studied IT related subjects like Operating Systems, DBMS,OOPS, ML, Web Development, AI, DSA, Compiler Design etc.",
    },
    {
      title: "Higher Secondary Education",
      school: "Rustomjee International School and Junior College (2018 - 2020)",
      grade: "88.3%",
      desc: "Studied in this school from 11th to 12th std. HSC Subjects: PCM, English, Electrical Maintenance, Environment Education.",
    },
    {
      title: "Primary & Secondary School Education",
      school: "Rustomjee International School (2005 - 2018)",
      grade: "96.3%",
      desc: "Studied in this school from Nursery to 10th std. SSC Subjects: English, Hindi-French, Marathi, Maths, Science, Social Sciences.",
    },
  ]);

  const [skills, setSkills] = useState([
    {
      title: 'React Js',
      value: '80'
    },
    {
      title: 'Node Js, EXPRESS',
      value: '80'
    },
    {
      title: 'PYTHON',
      value: '85'
    },
    {
      title: 'C, C++',
      value: '85'
    },
    {
      title: 'HTML, CSS, JS, BOOTSTRAP',
      value: '90'
    },
    {
      title: 'MONGODB & (SQL | MYSQL)',
      value: '85'
    },
    {
      title: 'GIT & GITHUB',
      value: '85'
    },
    {
      title: 'Java',
      value: '80'
    },
    {
      title: 'Django',
      value: '75'
    },
    {
      title: 'PHP',
      value: '75'
    },
    {
      title: 'POSTMAN API',
      value: '85'
    }
  ])

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
                  <ResumeCards
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
                  <ResumeCards
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
                {<Skills data={skills.slice(0, Math.ceil(skills.length / 2))}/>}
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
                {<Skills  data={skills.slice(Math.ceil(skills.length / 2))}/>}
              </div>
            </div>
          </>
        )}
        {isActive === "experience" && (
          <>
            <div className="col-12 col-md-6 mb-5">
              <div className="row">
                {
                  <ResumeCards
                    data={experience}
                    header={{ period: "2023 - 20XX", title: "Job Experience" }}
                  />
                }
              </div>
            </div>
            <div className="col-12 col-md-6 mb-5">
              <div className="row">
                {
                  <ResumeCards
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
                  <ResumeCards
                    data={achievements.slice(0, Math.ceil(achievements.length / 2))}
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
                  <ResumeCards
                    data={achievements.slice(Math.ceil(achievements.length / 2))}
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
