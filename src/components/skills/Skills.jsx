import React from "react";
import "./skills.css";

function Skills({ data }) {
  return (
    <div className="skills col-12 d-flex pr-5 pl-0 py-2">
      <div className="container mt-4">
        <div className="row">
          {data &&
            data.map((data) => (
              <div className="col-12 mb-4">
                <div className="d-flex flex-column position-relative">
                  <p className="position-absolute text-uppercase font-weight-bold mb-n1">
                    {data.title}
                  </p>
                  <span className="text-right" style={{ width: `${data.value}%` }}>
                  {data.value}%
                  </span>
                  <div className="progress rounded-md mt-1">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${data.value}%` }}
                      aria-valuenow={data.value}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
