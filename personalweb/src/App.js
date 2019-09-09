import React from 'react';
import Landing from './Components/Landing/Landing';
import AboutMe from './Components/AboutMe/aboutme';
import Experience from './Components/Experience/experience';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="struct">
      <Navbar></Navbar>
      <Landing></Landing>
      <AboutMe></AboutMe>
      <Experience></Experience>
    </div>
  );
}

export default App;
