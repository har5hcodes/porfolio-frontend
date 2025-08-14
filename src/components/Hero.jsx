import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../assets/profile-pic.png';

const projects = [
  { id: '001', name: 'Swiptory', url: 'https://rad-churros-f3cef0.netlify.app/' },
  { id: '002', name: 'Pocket Notes', url: 'https://symphonious-griffin-f869fc.netlify.app/' },
  { id: '003', name: 'Super App', url: 'https://zesty-sorbet-38aa79.netlify.app/' },
  { id: '004', name: 'Rock Paper Scissors', url: 'https://magical-salmiakki-3b1f2d.netlify.app/' }
];

const workExperiences = [
  { id: '001', company: 'Navi Technologies', url: '/work-experience' },
  { id: '002', company: 'Coding Blindspots Inc.', url: '/work-experience' },
  { id: '003', company: 'MathWorks', url: '/work-experience' }
];

const Hero = ({ onShowAbout }) => {
  const [time, setTime] = useState(new Date());
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAboutClick = (e) => {
    e.preventDefault();
    onShowAbout();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('harshavardhanputta.career@gmail.com');
    setIsEmailCopied(true);
    setTimeout(() => setIsEmailCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans p-8 flex flex-col">
      <header className="flex justify-between items-start mb-8">
        <div className="text-sm font-medium tracking-wider">
            <div className="mb-2">{time.toLocaleTimeString('en-GB')}</div>
            <div className="my-1 relative group">
                <span 
                    onClick={handleCopyEmail} 
                    className="cursor-pointer bg-black text-white px-2 py-1"
                >
                    {isEmailCopied ? 'COPIED!' : 'harshavardhanputta.career@gmail.com'}
                </span>
                {!isEmailCopied && (
                    <span className="absolute left-0 -bottom-6 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-medium bg-black text-white px-2 py-1 rounded">CLICK TO COPY</span>
                )}
            </div>
        </div>
        <div className="text-sm font-medium tracking-wider text-right">
          <a href="https://drive.google.com/file/d/1eHSpCQMoLGmaOvwOPp5YdSUEVGR5g2mf/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-transform duration-300 ease-in-out hover:translate-x-2">DOWNLOAD RESUME</a>
          <br/>
          <button onClick={handleAboutClick} className="hover:text-gray-500 text-left transition-transform duration-300 ease-in-out hover:translate-x-2">ABOUT</button>
          <br/>
          <Link to="/work-experience" className="group hover:text-gray-500 transition-transform duration-300 ease-in-out hover:translate-x-2 flex items-center justify-end">WORK EXPERIENCE <span class="hidden group-hover:inline ml-2">→</span></Link>
        </div>
      </header>

      <main className="grid md:grid-cols-2 gap-8 flex-grow items-center">
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-8xl font-semibold tracking-wide">HARSHAVARDHAN</h1>
            <h1 className="text-8xl font-semibold tracking-wide">PUTTA</h1>
            <h2 className="text-sm font-medium tracking-wider mt-4">BACKEND ENGINEER / SOFTWARE DEVELOPER</h2>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-lg font-semibold tracking-widest mb-4 group">PROJECTS <span className="group-hover:hidden">↳</span><span className="hidden group-hover:inline">↓</span></h2>
              <ul>
                {projects.map(p => (
                  <li key={p.id} className="transition-transform duration-300 ease-in-out hover:translate-x-2 flex items-center text-md mb-2 font-medium tracking-wider">
                    <span className="mr-4 text-gray-500">{p.id}</span>
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">{p.name.toUpperCase()}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold tracking-widest mb-4 group">WORK EXPERIENCE <span className="group-hover:hidden">↳</span><span className="hidden group-hover:inline">↓</span></h2>
              <ul>
                {workExperiences.map(w => (
                  <li key={w.id} className="transition-transform duration-300 ease-in-out hover:translate-x-2 flex items-center text-md mb-2 font-medium tracking-wider">
                    <span className="mr-4 text-gray-500">{w.id}</span>
                    <Link to={w.url} className="hover:text-gray-500">{w.company.toUpperCase()}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-md h-[28rem] flex flex-col justify-center">
                <div className="group w-full cursor-pointer space-y-2 hover:space-y-0 transition-all duration-500">
                    <div className="h-24 bg-gray-200 overflow-hidden filter grayscale group-hover:grayscale-0 transition-all duration-500"><img src={profilePic} alt="Harshavardhan Putta" className="w-full h-auto object-cover" style={{ marginTop: '0' }} /></div>
                    <div className="h-24 bg-gray-200 overflow-hidden filter grayscale group-hover:grayscale-0 transition-all duration-500"><img src={profilePic} alt="Harshavardhan Putta" className="w-full h-auto object-cover" style={{ marginTop: '-6rem' }}/></div>
                    <div className="h-24 bg-gray-200 overflow-hidden filter grayscale group-hover:grayscale-0 transition-all duration-500"><img src={profilePic} alt="Harshavardhan Putta" className="w-full h-auto object-cover" style={{ marginTop: '-12rem' }}/></div>
                    <div className="h-24 bg-gray-200 overflow-hidden filter grayscale group-hover:grayscale-0 transition-all duration-500"><img src={profilePic} alt="Harshavardhan Putta" className="w-full h-auto object-cover" style={{ marginTop: '-18rem' }}/></div>
                    <div className="h-24 bg-gray-200 overflow-hidden filter grayscale group-hover:grayscale-0 transition-all duration-500"><img src={profilePic} alt="Harshavardhan Putta" className="w-full h-auto object-cover" style={{ marginTop: '-24rem' }}/></div>
                </div>
            </div>
        </div>
      </main>

      
    </div>
  );
};

export default Hero;
