import React from "react";
import { Link } from "react-router-dom";

const NavElem = () => {
  return (
    <div className="flex w-full flex-col footer  p-10 gap-10 text-yblue font-semibold  text-xl font-mono ">
      <Link to="/projects">
        <div className="hover:text-green-500">Projects</div>
      </Link>{" "}
      <Link to="/about">
        <div className="hover:text-green-500">About</div>
      </Link>{" "}
      <Link to="/contact">
        <div className="hover:text-green-500">Say Hi!</div>
      </Link>
    </div>
  );
};

export default NavElem;
