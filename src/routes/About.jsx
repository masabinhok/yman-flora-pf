import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { doll } from "../assets/image";
import Hero from "../components/Hero";

const About = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <Navbar />

      <Hero
        title="Hey there!"
        subtitle=" I am Yaman, a computer science student at Algoma University based in
            Brampton, Canada."
        extra="Wanna know more? shhhh! down there..."
        imgURL={doll}
      />

      <div className="flex justify-start items-start max-w-[1320px] pb-[96px] p-5 gap-5 max-md:flex-col">
        <div className="flex-1">
          <h1 className="font-mono text-[40px]">About me!</h1>
          <p className="font-mono py-4">
            "Hi, I'm Yaman Dangol, a passionate advocate of web development and
            frontend from Nepal. Currently studying Computer Science at Algoma
            University in Brampton, Canada, I've always been drawn to the
            artistry and functionality of digital design. My journey into web
            development is fueled by a deep-seated passion for creating
            seamless, user-friendly interfaces that blend creativity with
            technical precision. I find immense joy in bringing ideas to life
            through code, continually honing my skills to craft impactful
            digital experiences. Each project is an opportunity for me to push
            boundaries, learn new technologies, and grow as a developer in this
            dynamic field."
          </p>
          <a
            className="font-mono underline text-yblue hover:text-green-500"
            href=""
          >
            Download Resume
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <img
            className="max-w-[400px] max-md:hidden"
            src={doll}
            alt="i am a smiley"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
