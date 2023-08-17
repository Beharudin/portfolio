import React, { useState } from "react";
import "./testimonials.css";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([
    {
      img: "/img/unknown.png",
      comment: "As a professor and guide, I've observed Beharudin Mohammed's enthusiastic dedication and diligence. He consistently strives to meet my expectations and actively participates in various projects such as Web Development, Android App Development, and AWS/Firebase Storage under the guidance of esteemed university professors.",
      name: "N Biraja Isak",
    },
    {
      img: "/img/unknown.png",
      comment: "Beharudin Mohammed's curiosity and interpretation skills are assets for web development. His problem-solving and communication abilities contribute to effective teamwork, reflecting his persistent interest and curiosity that drive him to excel.",
      name: "Rajat Kumar Behera",
    },
    {
      img: "/img/unknown.png",
      comment: "Beharudin is a true team player, always ready to lend a hand and contribute his creative insights. His dedication and problem-solving skills have been instrumental in driving our projects forward.",
      name: "Biniyam Fikru",
    },
    {
      img: "/img/unknown.png",
      comment: "Working with Beharudin is a pleasure. His dedication, quick thinking, and ability to explain complex ideas in simple terms have a positive impact on our projects. He's an essential part of our team's success.",
      name: "Temam Hashim",
    }
  ]);

  return (
    <div id="testimonials" className="fluid-container">
      <div className="titleDiv">
        <p className="title">TESTIMONIAL</p>
        <h1 className="titleDesc">What Clients Say</h1>
      </div>
      <div className="row mb-4">
        {testimonials
          ? testimonials.map((testimonial) => (
              <div key={testimonial.id} className=" col-sm-12 col-md-6 col-lg-4">
                <div className="testimonial d-flex">
                  <div className="m-3">
                    <img
                      className="rounded-circle"
                      src={testimonial.img}
                      alt=""
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                  <div className="m-3">
                    <p>"{testimonial.comment}"</p>
                    <div className="text-white">
                      {" "}
                      <h5>- {testimonial.name}</h5>{" "}
                    </div>
                  </div>
                </div>
              </div>
            ))
          : "loading"}
      </div>
    </div>
  );
}

export default Testimonials;
