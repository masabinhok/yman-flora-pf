import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex items-center footer justify-center bg-slate-50 footer">
      <div className="flex items-center  flex-col justify-center max-w-[1320px] w-full p-5 gap-5">
        <div className="flex flex-col w-full items-center justify-center font-mono text-yblue border-b-2 gap-4 ">
          <div className="hover:text-green-500 text-[16px] ">FACEBOOK</div>
          <div className="hover:text-green-500 text-[16px] ">EMAIL</div>
          <div className="hover:text-green-500 text-[16px] mb-4">INSTAGRAM</div>
        </div>
        <div className="flex flex-col w-full items-center justify-center">
          <p className="text-yblue text-[16px] font-mono">
            &copy; 2024 yamandangol
          </p>
          <p className="text-yblue text-[16px] font-mono">REACT</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
