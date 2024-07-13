import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="w-full flex justify-center">
      <Navbar />
      <div className="flex justify-center items-center h-[calc(100vh-100px)]"></div>
    </div>
  );
};

export default Home;
