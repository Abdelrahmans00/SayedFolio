import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import Footer from './Footer';
import { HashRouter, Route, Routes } from 'react-router-dom'; // ✅ Use HashRouter instead of BrowserRouter
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Skills from './Skills';
import Projects from './Projects';
import About from './About';
import DarkMode from './DarkMode';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  return (
    <HashRouter> {/* ✅ Change from BrowserRouter to HashRouter */}
      <div className="App">
        <NavBar />
        <DarkMode/>
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
    </HashRouter>
  );
}

export default App;
