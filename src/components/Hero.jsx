import React from "react";
import HeroImg from "../assets/images/illustration-1.svg";
import Input from "./Input";
const Hero = () => {
  return (
    <>
      <section
        className="mx-auto max-w-7xl mb-12 flex scroll-mt-40 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row widescreen:section-min-height tallscreen:section-min-height"
        id="hero"
      >
        <article className="sm:w-1/2">
          <h2 className="max-w-md text-center text-4xl font-bold  sm:text-left sm:text-5xl ">
            All your files in one secure location, accessible anywhere.
          </h2>
          <p className="mt-4 max-w-md text-center text-xl sm:text-left">
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </p>

          <Input />
        </article>
        <img className="w-1/2" src={HeroImg} alt="Rocket Dab" />
      </section>

      <hr className="dark:bg-white mx-auto w-1/2 bg-black" />
    </>
  );
};

export default Hero;
