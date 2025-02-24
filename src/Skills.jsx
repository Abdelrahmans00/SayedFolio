import React, { Component } from 'react';
import './Skills.css';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { FaPython } from "react-icons/fa";


export default function Skills() {
  return (
    <div>
      <div className="container pb-5 pt-5">
        <h2 className="pb-3 pt-3 fw-bold">Skills</h2>
        <div className="row d-flex justify-content-center">
          {[
            { icon: "fa-brands fa-html5", title: "HTML" },
            { icon: "fa-brands fa-css3-alt", title: "CSS" },
            { icon: "fa-brands fa-js", title: "JavaScript" },
            { icon: "fa-brands fa-react", title: "React" },
            { icon: "fa-solid fa-mobile", title: "Responsive Design" },
            { icon: "fa-solid fa-palette", title: "UI/UX Design" },
            { icon: "fa-solid fa-screwdriver-wrench", title: "Development Tools" },
            { icon: "fa-solid fa-laptop-code", title: "C++" },
            { component: <FaPython />, title: "Python" },
            { icon: "fa-brands fa-bootstrap", title: "Bootstrap" },
            { component: <RiTailwindCssFill />, title: "TailwindCSS" },
            { component: <SiTypescript /> , title: "TypeScript" }, 
            { component: <SiVite />, title: "Vite" }, 


          ].map((skill, index) => (
            <div
              key={index}
              className="col-6 col-md-3 d-flex align-items-center justify-content-center skill-box p-2 mb-3"
              data-aos="fade-left"
              data-aos-delay={100 * (index + 1)}
            >
              {skill.img ? (
                <img src={skill.img} alt={skill.title} className="skill-logo" />
              ) : skill.component ? (
                skill.component
              ) : (
                <i className={`${skill.icon} fa-lg me-2`}></i>
              )}
              <h5 className="mb-0">{skill.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}