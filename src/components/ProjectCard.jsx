import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="flex rounded-xl flex-col items-center text-center  gap-5 py-10 px-5 w-full bg-white">
      <img
        className="max-w-[200px] "
        src={project.imgURL}
        alt="i am a smiley"
      />
      <div className="flex  flex-col bg-slate-100 w-full p-5 rounded-xl">
        <h1 className="font-mono text-[24px] ">{project.title}</h1>
        <p className="font-mono text-[16px]">{project.description}</p>

      </div>
      <div className="font-mono">GET TO KNOW MORE ? <span className="underline text-yblue hover:text-green-500">VISIT here</span></div>
    </div>
  );
};

export default ProjectCard;
