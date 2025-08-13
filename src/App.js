import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';

// Import components
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Work from './components/Work';
import Connect from './components/Connect';

// Home component to render all sections
const Home = () => (
  <main>
    <section id="about">
      <About />
    </section>
    <section id="skills">
      <Skills />
    </section>
    <section id="projects">
      <Projects />
    </section>
    <section id="work">
      <Work />
    </section>
    <section id="connect">
      <Connect />
    </section>
  </main>
);

const AppContent = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Home />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <div className="theme-transition min-h-screen w-full bg-white dark:bg-gray-900">
        <AppContent />
      </div>
    </ThemeProvider>
  );
}

export default App;
