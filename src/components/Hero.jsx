import React from "react";
import HeroImg from "../assets/images/illustration-1.svg";
import Input from "./Input";
const Hero = () => {
  return (
    <>
      <section
        className="max-w-7xl mx-auto my-4 md:my-12 flex flex-col-reverse items-center justify-center gap-6 lg:gap-8 p-6 sm:flex-row"
        id="hero"
      >
        <article className="sm:w-1/2">
          <h2 className="max-w-md text-center text-3xl font-bold sm:text-left sm:text-5xl  ">
            All your files in one secure location, accessible anywhere.
          </h2>
          <p className="mt-4 max-w-md text-center md:text-xl sm:text-left">
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </p>

          <Input />
        </article>
        <img className="w-1/2" src={HeroImg} alt="/" />
      </section>
    </>
  );
};

export default Hero;
