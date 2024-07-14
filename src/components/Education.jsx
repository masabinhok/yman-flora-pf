import React from "react";

const Education = ({ edu }) => {
  return (
    <div className="flex pb-4 mb-6  flex-col items-center justify-center">
      <h1 className="font-mono text-[30px]">{edu.uni}</h1>
      <p className="font-mono text-[20px]">{edu.address}</p>
      <p className="font-mono">{edu.time}</p>
    </div>
  );
};

export default Education;
