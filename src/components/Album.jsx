import React from "react";
import profilePic from "../assets/profile-pic.png";

const Album = () => {
  return (
    <div className="flex justify-center h-5/6">
      <div
        style={{
          backgroundImage: `url(${profilePic})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        className="flex flex-col justify-start w-full h-full p-10 text-3xl gap-2 sm:gap-4"
      ></div>
    </div>
  );
};

export default Album;
