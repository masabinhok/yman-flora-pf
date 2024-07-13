import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="max-w-[1320px] h-[100px] flex justify-between items-center w-full p-4">
      <div className="flex flex-1">
        <Link to="/">
          <h1 className="text-slate-500 text-[60px] max-lg:text-[48px] max-sm:text-[32px] font-florabet  pl-7">
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
      <div className="space-y-2 max-md:block hidden cursor-pointer ">
        <div className="block w-8 h-0.5 bg-yblue"></div>
        <div className="block w-8 h-0.5 bg-yblue"></div>
        <div className="block w-8 h-0.5 bg-yblue"></div>
      </div>
    </nav>
  );
};

export default Navbar;
