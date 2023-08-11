import React, { useState } from "react";
import "./testimonials.css";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([
    {
      img: "/img/user.jpg",
      comment: "Occaecat aute elit qui ipsum Lorem laborum magna sit duis.",
      name: "Usmaan Mohammed",
    },
    {
      img: "/img/user.jpg",
      comment: "Occaecat aute elit qui ipsum Lorem laborum magna sit duis.",
      name: "Jamaal Abdii",
    },
    {
      img: "/img/user.jpg",
      comment: "Occaecat aute elit qui ipsum Lorem laborum magna sit duis.",
      name: "Kamaal Bakar",
    },
    {
      img: "/img/user.jpg",
      comment: "Occaecat aute elit qui ipsum Lorem laborum magna sit duis.",
      name: "Caalaa Mohammed",
    },
    {
      img: "/img/user.jpg",
      comment: "Occaecat aute elit qui ipsum Lorem laborum magna sit duis.",
      name: "Maahdii Ziyaad",
    },
    {
      img: "/img/user.jpg",
      comment: "Occaecat aute elit qui ipsum Lorem laborum magna sit duis.",
      name: "Obsituu Musxafaa",
    },
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
