import React from "react";
import "./resumeCards.css";

function EducationResumeCard({ data, header }) {
  return (
    <div>
      <div className="col-span-1 md:col-span-2 mb-5">
        <div className="resumeTitleDiv">
          <p className="resumeTitle">{header.period}</p>
          <h1 className="resumeTitleDesc">{header.title}</h1>
        </div>
      </div>
      <div className="col-span-1 md:col-span-2 cardContainer mx-3 mt-5">
        {data &&
          data.map((data) => (
            <div className="hoverCard my-10">
              <div className="w-5/6 flex px-0">
                <div className="circleConnector"></div>
                <div className="horConnector"></div>
                <div className="cardDiv text-gray-400">
                  <div className="w-full flex px-2 justify-between">
                    <div className="w-3/4">
                      <h6 className="courseTitle">{data.title}</h6>
                      <p className="school">{data.school}</p>
                    </div>
                    <div className="w-1/4 text-end">
                      <button className="btn gradeBtn">{data.grade}</button>
                    </div>
                  </div>
                  <p className="p-3">{data.desc}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default EducationResumeCard;
