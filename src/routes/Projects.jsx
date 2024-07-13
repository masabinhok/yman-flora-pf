import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { doll } from "../assets/image";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import projects from "../constants/projects";

const Projects = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <Navbar />

      <Hero
        title="Projects"
        subtitle="Here are some of the projects I've worked on. Feel free to check them out!"
        imgURL={doll}
        extra="Didn't see anything here? scroll then!!!"
      />

      <div className="flex justify-start items-start max-w-[1320px] p-5 gap-5 max-md:flex-col w-full pb-[96px]">
        {/* Ensure this div takes full width */}
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 w-full">
          {projects.map((project, idx) => (
            <div key={idx}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
