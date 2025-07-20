import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"; 
import DarkMode from './DarkMode';

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("selectedTheme") || "light");
  const [isOpen, setIsOpen] = useState(false); 

  useEffect(() => {
    const handleThemeChange = () => {
      const newTheme = localStorage.getItem("selectedTheme") || "light";
      setTheme(newTheme);
    };

    window.addEventListener("themeChange", handleThemeChange);
    return () => window.removeEventListener("themeChange", handleThemeChange);
  }, []);

  const handleToggle = () => setIsOpen(!isOpen); 
  const closeMenu = () => setIsOpen(false); 

  return (
    <div className="fixed-top">
      <nav className={`navbar navbar-expand-lg bg-body-tertiary py-1 mb-2`} data-bs-theme={theme}>
        <div className="container-fluid">
          <Link
            className="navbar-brand me-2 d-flex align-items-center px-3 py-1 rounded" 
            to="home"
            style={{
              backgroundColor: theme === "dark" ? "#222" : "#ddd",
              color: theme === "dark" ? "#fff" : "#000",
              borderRadius: "8px",
              boxShadow: theme === "dark" ? "0 2px 5px rgba(255, 255, 255, 0.2)" : "0 2px 5px rgba(0, 0, 0, 0.5)",
              transition: "all 0.3s ease-in-out"
            }}
          >
            Abdelrahman Sayed
          </Link>


          <button className="navbar-toggler" type="button" onClick={handleToggle}>
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-5 align-items-center">
              <li className="nav-item me-3">
                <Link className="nav-link active" to="projects" onClick={closeMenu}>Projects</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link active" to="skills" onClick={closeMenu}>Skills</Link>
              </li>
{/*               <li className="nav-item me-3">
                <Link className="nav-link active" to="about" onClick={closeMenu}>About</Link>
              </li> */}
            </ul>
          </div>
          <DarkMode />
        </div>
      </nav>
    </div>
  );
}
