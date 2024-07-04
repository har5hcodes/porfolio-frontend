import React from "react";

const About = () => {
  const resumeUrl = process.env.REACT_APP_RESUME_URL;
  return (
    <div className="flex justify-center bg-red-200 h-5/6">
      <div className="flex flex-col justify-start w-full h-full p-10 text-md gap-2 sm:gap-4">
        <p>
          Hi <span className="text-3xl  font-bold text-red-500 ">Hello</span>,
          You already know my name by now! Let me share a bit more about my
          career and other aspects of my life.
        </p>
        <p>
          I'm from a place renowned for its{" "}
          <span className="text-3xl  font-bold text-red-500">Biryani.</span> I
          pursued my Dual Degree in ECE from an IIT located in a North-East
          state, despite its name starting with 'West'. Currently, I'm in the{" "}
          <span className="text-3xl  font-bold text-red-500">
            Silicon Valley
          </span>{" "}
          of India, climbing the SDE ladder.
        </p>
        <p>
          Career being my primary focus, the rest I'm flexible, enjoying
          different interests of mine. Mainly, Cricket, Dance, Workout,
          Photography, Dating, Travelling, and{" "}
          <span className="text-3xl  font-bold text-red-500">more!</span>
        </p>
        <p>
          Interested in my resume?{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={resumeUrl}
            className="text-3xl font-bold text-red-500 hover:underline"
          >
            Click here.
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
