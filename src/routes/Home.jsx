import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { doll } from "../assets/image";

const Home = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <Navbar />
      <div className="flex justify-center items-center h-[calc(100vh-100px)] p-5 gap-5 max-md:flex-col">
        <div className="flex items-start justify-start">
          {" "}
          <img
            className="rounded-full max-w-[300px] align- aspect-square object-cover "
            src={doll}
            alt=""
          />
        </div>
        <div className="flex flex-2 flex-col items-start justify-center max-md:items-center  ">
          <h1 className="font-bold text-[60px] mb-[-20px]  text-pink-500">
            HELLO!
          </h1>
          <p className="font-bold text-[30px] text-yblue font-mono">
            I AM YAMAN
          </p>
          <p className="text-[40px] font-florabet text-red-500">
            COMP.sci{" "}
            <span className="font-mono font-bold text-slate-500">STUDENT</span>
          </p>
          <p className="font-florabet text-green-500 max-md:text-center">
            I craft code and dreams,
            <br /> merging logic with artistry to create tomorrow's innovations.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
