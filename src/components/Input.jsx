import React, { useState } from "react";
import validator from "validator";

const Input = () => {
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
        className="mt-4 flex flex-col gap-4  items-center md:items-start md:flex-row"
        name="contact"
        action="/contact"
        method="post"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input
          className="outline-none rounded py-3 px-10 lg:px-20 border mr-0 text-gray-800 border-gray-200 bg-white text-center"
          placeholder="your@mail.com"
          name="email"
          type="email"
          required
          onChange={(e) => validateEmail(e)}
        />
        <button
          className="py-4 px-[6.5rem] md:px-5 md:py-3 rounded bg-blue-400 hover:bg-sky-300 font-bold p-4 uppercase   text-white  text-xs md:text-base  tracking-wide md:tracking-wider"
          type="submit"
        >
          Subscribe
        </button>
      </form>
      <p className="text-[#FFC2C8] text-sm mt-2">{emailError}</p>
    </div>
  );
};

export default Input;
