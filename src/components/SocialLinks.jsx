import React from "react";

const SocialLinks = () => {
  return (
    <>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:harshavardhanputta5@gmail.com"
        className="w-1/4 h-fit sm:text-start text-end text-red-200 hover:text-black"
        style={{ writingMode: "vertical-lr" }}
      >
        Gmail
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/harshavardhan-putta-53b510238/"
        className="w-1/4 h-fit sm:text-start text-end text-red-300 hover:text-black"
        style={{ writingMode: "vertical-lr" }}
      >
        LinkedIn
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/harshavardhan.putta/"
        className="w-1/4 h-fit sm:text-start text-end text-red-400 hover:text-black"
        style={{ writingMode: "vertical-lr" }}
      >
        Instagram
      </a>
    </>
  );
};

export default SocialLinks;
