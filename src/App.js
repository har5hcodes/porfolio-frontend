import React from "react";
import "./index.css";
import Header from "./components/Header";
import PianoBar from "./components/PianoBar";
import Connect from "./components/Connect";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import { Route, Routes } from "react-router-dom";
import Album from "./components/Album";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col mx-auto xl:w-1/2 lg:w-9/12 md:w-screen sm:w-screen lg:h-4/6 md:h-5/6 sm:h-screen h-screen w-screen">
        <Routes>
          <Route path="/" element={<PianoBar />} />
          <Route path="/about" element={<About />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work" element={<Work />} />
          <Route path="/album" element={<Album />} />
        </Routes>
        <Header />
      </div>
    </div>
  );
}

export default App;
