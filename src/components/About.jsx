import React, { useState } from 'react';
import profilePic from '../assets/profile-pic.png';

// Define Netflix colors
const netflixRed = '#E50914';
const netflixBlack = '#111827';
const netflixWhite = '#FFFFFF';

const About = () => {
  const [showImage, setShowImage] = useState(false);

  return (
    <section 
      id="about"
      className="relative w-full flex flex-col items-center justify-center min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden"
      style={{ backgroundColor: netflixBlack }}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 
          className="text-6xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-none"
          style={{ color: netflixWhite }}
        >
          Harshavardhan Putta
        </h1>
        <p 
          className="mt-4 max-w-3xl mx-auto text-xl sm:text-2xl font-bold"
          style={{ color: netflixRed }}
        >
          Software Engineer & Creative Technologist
        </p>
      </div>
    </section>
  );
};

export default About;