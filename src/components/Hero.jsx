import React from "react";

const Hero = ({ title, subtitle, extra, imgURL }) => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-100px)] p-5 gap-5 max-md:flex-col relative">
      <div className="flex  items-center justify-center ">
        <img
          className="max-w-[400px] max-md:w-[500px] absolute top-50% left-50% z-[-100] mix-blend-screen"
          src={imgURL}
          alt="i am a smiley"
        />
      </div>
      <div>
        <h1 className="font-mono text-[40px]">{title}</h1>
        <p className="font-mono">{subtitle}</p>
        <div className="p-10 flex items-center justify-center flex-col">
          <p className="font-mono font-bold text-red-500">{extra}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
