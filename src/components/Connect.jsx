import React from "react";
import ContactForm from "./ContactForm";
import SocialLinks from "./SocialLinks";

const Connect = () => {
  return (
    <div className="flex justify-center bg-red-200 h-5/6 uppercase">
      <div className="flex justify-around w-full h-full">
        <div className="flex align-bottom sm:w-1/2 w-2/6 h-full bg-white sm:text-5xl text-3xl font-extrabold py-4 sm:px-4 tracking-wider">
          <SocialLinks />
        </div>
        <div className="py-6 sm:w-1/2 w-4/6 h-full bg-white">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Connect;
