import React from "react";
import { testimonials } from "../data/MockData";

function Testimonials() {
  

  return (
    <div id="testimonials" className="w-full mt-24 px-5 md:px-24">
      <div className="titleDiv">
        <p className="title">TESTIMONIAL</p>
        <h1 className="titleDesc">What Clients Say</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
        {testimonials
          ? testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="grid grid-cols-4 gap-2 bg-[#1c1e22] p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-2xl hover:bg-gradient-to-b hover:from-[#0c0e10] hover:to-[#1c1e22]"
              >
                <div className="col-span-1">
                  <img
                    className="rounded-full"
                    src={testimonial.img}
                    alt=""
                    style={{ width: "90px", height: "90px" }}
                  />
                </div>
                <div className="col-span-3 text-gray-300 flex flex-col space-y-4 hover:text-white hover:cursor-pointer">
                  <p>"{testimonial.comment}"</p>
                  <div className="text-white">
                    {" "}
                    <h5>- {testimonial.name}</h5>{" "}
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
