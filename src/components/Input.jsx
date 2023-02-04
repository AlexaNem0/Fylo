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
        className="mt-4 flex"
        name="contact"
        action="/contact"
        method="post"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input
          className="outline-none rounded-l-lg p-3 lg:px-11 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
          placeholder="your@mail.com"
          name="email"
          type="email"
          required
          onChange={(e) => validateEmail(e)}
        />
        <button
          className="px-4 md:px-7 rounded-r-lg bg-blue-400 hover:bg-sky-300 font-bold p-4 uppercase  border-t border-b border-r text-white tracking-wide md:tracking-wider"
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
