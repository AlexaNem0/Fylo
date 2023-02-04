import React from "react";
import TestimonialImg from "../assets/images/illustration-2.svg";
import BackImg from "../assets/images/bg-curve-desktop.svg";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Card from "./Card";
const Testimonial = () => {
  return (
    <>
      <img className="mx-auto w-full" src={BackImg} alt="" />
      <div className="bg-[#F8F8FE]">
        <section
          className="max-w-7xl mx-auto w-full flex scroll-mt-40 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row widescreen:section-min-height tallscreen:section-min-height
        "
          id="testimonials"
        >
          <article className="sm:w-1/2">
            <h2 className="max-w-md text-center text-4xl font-bold  sm:text-left sm:text-5xl ">
              Stay productive, wherever you are
            </h2>
            <p className="mt-4 max-w-md text-center text-xl sm:text-left">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="mt-4 max-w-md text-center text-xl sm:text-left">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required!
            </p>
            <a
              className="flex flex-row justify-center items-center mt-4 gap-2 text-green-500 text-lg underline underline-offset-8 md:justify-start "
              href="https://www.dropbox.com/"
              target="blank"
            >
              See how Fylo works
              <BsFillArrowRightCircleFill />
            </a>
            <div className="flex justify-center md:justify-start mt-20">
              <Card />
            </div>
          </article>
          <img className="w-1/2" src={TestimonialImg} alt="/" />
        </section>
        {/* <hr className="dark:bg-white mx-auto w-1/2 bg-black" /> */}
      </div>
    </>
  );
};

export default Testimonial;
