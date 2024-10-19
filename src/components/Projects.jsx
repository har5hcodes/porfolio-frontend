import React from "react";

const Projects = () => {
  return (
    <div className="flex justify-center h-5/6">
      <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 w-full h-full gap-2 uppercase font-bold tracking-widest">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://rad-churros-f3cef0.netlify.app/"
          className="bg-red-400 w-auto h-fit px-3 py-10 text-5xl hover:text-red-400 hover:bg-white hover:px-10 cursor-pointer"
        >
          Swiptory
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://symphonious-griffin-f869fc.netlify.app/"
          className="bg-red-400 w-auto h-fit px-3 py-4 text-lg hover:text-red-400 hover:bg-white hover:px-10 cursor-pointer"
        >
          Pocket Notes
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://zesty-sorbet-38aa79.netlify.app/"
          className="bg-red-400 w-auto h-fit px-3 py-1 text-md hover:text-red-400 hover:bg-white hover:px-10 cursor-pointer"
        >
          Super App
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://magical-salmiakki-3b1f2d.netlify.app/"
          className="bg-red-400 w-auto h-fit px-3 py-14 text-3xl hover:text-red-400 hover:bg-white hover:px-2 cursor-pointer"
        >
          Rock Paper Scissors
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://astounding-cat-a21f58.netlify.app/"
          className="bg-red-400 w-auto h-fit px-3 py-7 text-xl hover:text-red-400 hover:bg-white hover:px-10 cursor-pointer"
        >
          Stopwatch Timer
        </a>
      </div>
    </div>
  );
};

export default Projects;
