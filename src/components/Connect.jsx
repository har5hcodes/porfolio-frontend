import React from "react";
import SocialLinks from "./SocialLinks";

const Connect = () => {
  return (
    <div className="flex justify-center h-5/6 uppercase">
      <div className="flex justify-start w-full h-full">
        <div className="flex align-bottom sm:w-1/2 w-2/6 h-full bg-white sm:text-5xl text-3xl font-extrabold py-4 sm:px-4 tracking-wider">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Connect;
