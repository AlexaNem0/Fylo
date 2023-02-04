import React from "react";
import Logo from "../assets/images/logo.svg";
const Navbar = () => {
  return (
    <div className="bg-blue-100">
      <section className="mx-auto flex w-full items-center justify-between p-4 max-w-7xl">
        <a href="#hero">
          <img className="w-2/4 md:w-max" src={Logo} alt="" />
        </a>
        <div>
          <nav className="aria-label='main' space-x-3  md:space-x-8  lg:space-x-10  md:text-xl md:block">
            <a href="#hero" className="hover:opacity-90">
              Features
            </a>
            <a href="#testimonials" className="hover:opacity-90">
              Team
            </a>
            <a href="#footer" className="hover:opacity-90">
              SignIn
            </a>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
