import React from 'react';
import './Home.css';
import { AOS } from 'aos';

export default function Home() {
  return (
    <div>
      <div className="firstSection container-fluid pb-5 pt-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0">
            <div className="border border-dark p-3 rounded w-100 w-md-75 shadow-sm text-center">
              <h2>Front-End Web Developer</h2>

              <div className="mt-3 d-flex flex-column flex-md-row justify-content-between">
                <div className="d-flex align-items-center mb-2 mb-md-0">
                  <i className="fa-solid fa-location-dot me-2"></i>
                  <p className="fs-6 mb-0">Egypt, El-Sheikh Zayed</p>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-envelope me-2"></i>
                  <a href="mailto:as20056789@gmail.com">as20056789@gmail.com</a>
                </div>
              </div>

              <div className="d-flex flex-column flex-md-row justify-content-between mt-3">
                <div className="d-flex align-items-center mb-2 mb-md-0">
                  <i className="fa-brands fa-github me-2"></i>
                  <a href="https://github.com/Abdelrahmans00">Abdelrahmans00</a>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fa-brands fa-linkedin me-2"></i>
                  <a href="https://www.linkedin.com/in/abdelrahman-sayed-9312142a4/">Abdelrahman Sayed</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 px-3 px-md-5">
            <p>
              Discover my journey as a Computer Science student at Cairo University,
              focusing on front-end web development. Explore my projects and skills
              that showcase my dedication to creating engaging web experiences.
            </p>
          </div>
        </div>
      </div>


      <div className="secondSection container mt-5 pt-5" data-aos="fade-left">
        <h1 className="text-center fw-bold">Meet Abdelrahman Sayed</h1>
        <p className="text-center pb-5 fs-5">
          A dedicated Computer Science student passionate about web development.
        </p>
        <div className="row text-center">
       
          <div className="col-12 col-md-4 firstSecondSection pb-5">
            <i className="fa-solid fa-user fa-2x mb-2"></i>
            <h2>Background</h2>
            <p>
              Currently pursuing a degree in Computer Science at Cairo University, I have developed a strong foundation in programming and design principles. My journey has been fueled by a desire to create impactful web experiences.
            </p>
          </div>

     
          <div className="col-12 col-md-4 secondSecondSection pb-5">
            <i className="fa-solid fa-code fa-2x mb-2"></i>
            <h2>Skills</h2>
            <p>
              I specialize in front-end development, focusing on creating responsive and user-friendly interfaces. My skills include HTML, CSS, JavaScript, and various frameworks that enhance user experience.
            </p>
          </div>

       
          <div className="col-12 col-md-4 thirdSecondSection pb-5">
            <i className="fa-solid fa-graduation-cap fa-2x mb-2"></i>
            <h2>Education</h2>
            <p>
              I am currently enrolled at Cairo University, where I am gaining valuable knowledge and hands-on experience in computer science. My education is complemented by personal projects that showcase my skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}