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
    <div className="min-h-screen bg-white text-black flex flex-col p-4 sm:p-6 lg:p-8 font-sans">
      <header className="flex flex-col sm:flex-row items-start sm:items-baseline gap-4 sm:gap-8 mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tighter">WORK EXPERIENCE</h1>
        <a href="/" className="text-sm sm:text-lg font-medium tracking-wider hover:text-gray-500 flex items-center gap-2">
          <span className="text-2xl sm:text-5xl leading-none">*</span>
          <span>CLOSE</span>
        </a>
      </header>
      
      {/* Mobile Layout */}
      <div className="block lg:hidden flex-grow">
        <div className="space-y-8">
          {workExperienceDetails.map((job, index) => (
            <div key={index} className="border-l-4 border-black pl-6 relative">
              <div className="absolute -left-2 top-0 h-4 w-4 bg-black rounded-full"></div>
              <div className="space-y-2">
                <p className={`font-bold ${job.current ? 'text-lg' : 'text-base'}`}>{job.company}</p>
                <p className="text-sm text-gray-700">{job.role}</p>
                <p className="text-xs text-gray-500 tracking-widest">{job.date}</p>
                <p className="text-xs text-gray-600">{job.location}</p>
                {false && (
                  <p className="text-sm text-gray-700 mt-2">{job.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <main className="hidden lg:flex flex-grow flex-col justify-center items-center w-full px-4">
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
