import React from "react";
import AuthorImg from "../assets/images/avatar-testimonial.jpg";
const Card = () => {
  return (
    <>
      <style>
        @import
        url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);
      </style>
      <div className="w-5/6 md:w-3/4  rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800 max-w-3xl">
        <div className="w-full pt-1 pb-5">
          <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
            <img src={AuthorImg} alt="" />
          </div>
        </div>
        <div className="w-full mb-10">
          <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
            “
          </div>
          <p className="text-sm text-gray-600 text-center px-5">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
            ”
          </div>
        </div>
        <div className="w-full">
          <p className="text-md text-indigo-500 font-bold text-center">
            Kyle Burton
          </p>
          <p className="text-xs text-gray-500 text-center">
            Founder & CEO, Huddle
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
