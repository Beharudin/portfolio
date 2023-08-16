import React from "react";
import "./resumeCards.css";

function OtherResumeCards({ data, header }) {
  return (
    <>
      <div className="col-12 mb-5">
        <div className="resumeTitleDiv">
          <p className="resumeTitle">{header.period}</p>
          <h1 className="resumeTitleDesc">{header.title}</h1>
        </div>
      </div>
      <div className="row cardContainer mx-3 mt-5">
        { data && data.map((data) => (
          <div className="hoverCard">
            <div className="col-10 d-flex px-0">
              <div className="circleConnector"></div>
              <div className="horConnector"></div>
              <div className="cardDiv">
                <div className="row px-3">
                  <div className="col-12">
                    <h6 className="courseTitle">{data.title}</h6>
                    <p className="school">{data.school}</p>
                  </div>
                </div>
                <p className="p-3">{data.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default OtherResumeCards;
