import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import Footer from './Footer';
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Using HashRouter
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Skills from './Skills';
import Projects from './Projects';
import About from './About';
import DarkMode from './DarkMode';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with options
  }, []);

  return (
    <Router> {/* Changed from BrowserRouter to HashRouter */}
      <div className="App">
        <NavBar />
        <DarkMode />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
