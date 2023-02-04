import React from "react";
import InputStart from "./InputStart";
const CallToAction = () => {
  return (
    <div className="bg-[#585989]">
      <section
        className="max-w-7xl lg:justify-between mx-auto flex scroll-mt-40 flex-col-reverse items-center justify-center gap-2 md:gap-2 lg:gap-8 p-6 sm:flex-row  widescreen:section-min-height tallscreen:section-min-height text-white lg:py-[4rem]"
        id="footer"
      >
        <article className="sm:w-1/2">
          <h2 className="max-w-md text-center text-3xl font-bold sm:text-left   ">
            Get early access today
          </h2>
          <p className="mt-4 max-w-md text-center text-base sm:text-left">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </article>
        <InputStart />
      </section>
    </div>
  );
};

export default CallToAction;
