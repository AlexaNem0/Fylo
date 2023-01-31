import React from "react";

const Input = () => {
  return (
    <div>
      <form className="mt-4 flex ">
        <input
          className="outline-none rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
          placeholder="your@mail.com"
          required
        />
        <button className="px-4 md:px-7 rounded-r-lg bg-blue-400 hover:bg-sky-300 text-gray-800 font-bold p-4 uppercase  border-t border-b border-r">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Input;
