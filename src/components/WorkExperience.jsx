import React from 'react';
import Footer from './Footer';

const workExperienceDetails = [
  {
    company: 'Navi Technologies Pvt Ltd',
    role: 'Software Engineer',
    date: 'July 2024 – Present',
    location: 'Bangalore, India',
    current: true,
    description: 'Currently building and scaling backend systems for innovative financial products.'
  },
  {
    company: 'Coding Blindspots Inc.',
    role: 'Fullstack Development Intern',
    date: 'Jan 2024 - Apr 2024',
    location: 'Remote',
    description: ''
  },
  {
    company: 'MathWorks India Pvt Ltd',
    role: 'Engineering Development Group Intern',
    date: 'May 2023 – Jul 2023',
    location: 'Hyderabad, India',
    description: 'Worked within the Engineering Development Group, gaining experience in software design, development, and testing processes.'
  }
];

const WorkExperience = () => {
  return (
    <div className="h-screen bg-white text-black flex flex-col p-8 font-sans overflow-hidden">
      <header className="flex items-baseline gap-8">
        <h1 className="text-6xl font-bold tracking-tighter">WORK EXPERIENCE</h1>
        <a href="/" className="text-lg font-medium tracking-wider hover:text-gray-500 flex items-center gap-2">
          <span className="text-5xl leading-none">*</span>
          <span>CLOSE</span>
        </a>
      </header>
      <main className="flex-grow flex flex-col justify-center items-center w-full px-4">
        <div className="w-full relative border-t-2 border-black">
          <div className="flex justify-around absolute -top-2 w-full">
            {workExperienceDetails.map((job, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {/* Dot */}
                <div className="h-4 w-4 bg-black rounded-full"></div>
                {/* Details */}
                <div className="absolute top-full mt-4 w-64 text-center p-2 transition-transform duration-300 ease-in-out hover:scale-105">
                  <p className={`font-bold ${job.current ? 'text-xl' : 'text-lg'}`}>{job.company}</p>
                  <p className="text-md">{job.role}</p>
                  <p className="text-xs text-gray-500 tracking-widest mt-1">{job.date}</p>
                  {job.current && (
                    <p className="text-5xl font-black tracking-[0.2em] scale-y-150 mt-4">NOW</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer showName={true} />
    </div>
  );
};

export default WorkExperience;
