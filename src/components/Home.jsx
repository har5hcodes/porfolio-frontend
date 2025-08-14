import React, { useState } from 'react';
import Hero from './Hero';
import About from './About';

const Home = () => {
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  const showAbout = () => setIsAboutVisible(true);
  const hideAbout = () => setIsAboutVisible(false);

  return (
    <main>
      <Hero onShowAbout={showAbout} />
      {isAboutVisible && <About onClose={hideAbout} />}
    </main>
  );
};

export default Home;
