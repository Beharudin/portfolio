import React, { useState } from "react";
import "./resume.css";

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
        <div className="col-12 col-md-6 px-4">
          <div className="row">
            <div className="col-12 mb-5">
              <div className="resumeTitleDiv">
                <p className="resumeTitle">2005 - 2024</p>
                <h1 className="resumeTitleDesc">Educational Qualification</h1>
              </div>
            </div>
            {educations.map((education) => (
              <div className="col-10 mb-5">
                <div className="cardDiv">
                  <div className="row p-3">
                    <div className="col-9">
                      <h6 className="courseTitle">{education.title}</h6>
                      <p className="school">{education.school}</p>
                    </div>
                    <div className="col-3">
                      <button className="btn gradeBtn">
                        {education.grade}
                      </button>
                    </div>
                  </div>
                  <p className="p-3">{education.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="row">
            <div className="col-12">
              <div className="resumeTitleDiv">
                <p className="resumeTitle">2020 - 2023</p>
                <h1 className="resumeTitleDesc">Certificates</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
