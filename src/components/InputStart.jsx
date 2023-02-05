import React, { useState } from "react";
import validator from "validator";

const InputStart = () => {
  const [emailError, setEmailError] = useState("");
  // const [emailIsEmpty, setEmailIsEmpty] = useState("");

  // const validate = () => {
  //   return emailIsEmpty.length;
  // };

  const validateEmail = (e) => {
    const email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("");
    } else {
      setEmailError(`Please enter valid Email!`);
    }
  };

  return (
    <div>
      <form
        className="mt-4 flex flex-col gap-2  items-center md:items-start md:flex-row"
        name="contact"
        action="/contact"
        method="post"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input
          className="w-[80vw] md:w-[40vw] lg:w-[20vw] outline-none rounded p-3 border text-gray-800 border-gray-200 text-center "
          placeholder="your@mail.com"
          name="email"
          type="email"
          required
          onChange={(e) => validateEmail(e)}
        />
        <button
          className="w-[80vw] md:w-[18vw] lg:w-[12vw] p-[0.9rem] rounded bg-blue-400 hover:bg-sky-300 uppercase text-white text-sm tracking-wide"
          type="submit"
        >
          Get Started
        </button>
      </form>
      <p className="text-red-200 text-sm mt-2 text-center md:text-left">
        {emailError}
      </p>
    </div>
  );
};

export default InputStart;
