import React from "react";

const Projects = () => {
  return (
    <div className="flex justify-center h-5/6">
      <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 w-full h-full gap-2 uppercase font-bold tracking-widest">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://rad-churros-f3cef0.netlify.app/"
          className="bg-red-400 w-auto h-fit p-4 text-5xl hover:text-red-400 hover:bg-white hover:px-10 cursor-pointer"
        >
          Swiptory
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://symphonious-griffin-f869fc.netlify.app/"
          className="bg-red-400 w-auto h-fit p-2 text-lg hover:text-red-400 hover:bg-white hover:px-10 cursor-pointer"
        >
          Pocket Notes
        </a>
      </div>
    </div>
  );
};

export default Projects;
