import { Link } from "react-router-dom";
import { useState } from "react";
import NavElem from "./NavElem";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    {
      nav === true ? setNav(false) : setNav(true);
    }
  };
  return (
    <div className="flex w-full items-center justify-center flex-col">
      <nav className="max-w-[1320px] h-[100px] flex justify-between items-center w-full p-4">
        <div className="flex flex-1">
          <Link to="/">
            <h1 className="font-florabet text-[60px] max-lg:text-[48px] max-sm:text-[32px  pl-7 max-md:pl-0">
              yamandangol
            </h1>
          </Link>
        </div>
        <div className="flex justify-evenly items-center flex-1 text-yblue font-semibold  text-xl max-md:hidden font-mono ">
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
        <div
          onClick={handleClick}
          className="space-y-2 max-md:block hidden cursor-pointer "
        >
          <div className="block w-8 h-0.5 bg-yblue"></div>
          <div className="block w-8 h-0.5 bg-yblue"></div>
          <div className="block w-8 h-0.5 bg-yblue"></div>
        </div>
      </nav>
      {nav ? <NavElem /> : ""}
    </div>
  );
};

export default Navbar;
