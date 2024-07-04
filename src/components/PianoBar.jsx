import React from "react";
import { Link } from "react-router-dom";

const PianoBar = () => {
  return (
    <div className="flex flex-col justify-center bg-white h-5/6 sm:text-5xl text-2xl uppercase font-semibold tracking-widest">
      <Link
        to="/about"
        className="flex items-center max-sm:px-2 px-3 h-full w-2/3 bg-red-300 hover:text-red-300 hover:bg-white hover:px-10"
      >
        Who m i??
      </Link>
      <Link
        to="/projects"
        className="flex items-center max-sm:px-2 px-3 h-full w-3/4 bg-red-400 hover:text-red-400 hover:bg-white hover:px-10"
      >
        I worked on
      </Link>
      <Link
        to="work"
        className="flex items-center max-sm:px-2 px-3 h-full w-5/6 bg-red-500 hover:text-red-500 hover:bg-white hover:px-10"
      >
        I worked at xxx
      </Link>
      <Link
        to="/connect"
        className="flex items-center max-sm:px-2 px-3 h-full w-full bg-red-600 hover:text-red-600 hover:bg-white hover:px-10"
      >
        Connect with me, here
      </Link>
    </div>
  );
};

export default PianoBar;
