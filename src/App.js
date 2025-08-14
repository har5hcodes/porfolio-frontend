import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';

// Import components
import Home from './components/Home';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <ThemeProvider>
      <div className="theme-transition min-h-screen w-full bg-white dark:bg-gray-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work-experience" element={<WorkExperience />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
