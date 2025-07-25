import React from 'react'


export default function Projects() {
  return (
    <div>
        <div className="container pb-5 pt-5 mb-5 ">
            <h2 className='pb-5 pt-3 fw-bold'>Recent Projects</h2>
                <div className="row">
                    <div className="first col-md-4 pb-4 pt-4"data-aos="fade-left"data-aos-delay="100">
                        <h2>E-Commerce</h2>
                        <p> Built an interactive e-commerce product page with dynamic 
                            features using React and Bootstrap. Implemented a functional 
                            shopping cart with custom JavaScript logic. Optimized the 
                            website for fast loading time and responsiveness on all devices.
                        </p>
                        <a href="https://abdelrahmans00.github.io/CRUDReact/">View Project</a>
                    </div>
                    <div className="second col-md-4 pb-4 pt-4"data-aos="fade-left"data-aos-delay="200">
                        <h2>Movie API</h2>
                        <p> Developed a movie database web app using HTML, CSS, and 
                            JavaScript. Fetched real-time movie details, ratings, and posters 
                            from the MovieDB API. 
                        </p>
                        <a href="https://abdelrahmans00.github.io/MovieAPI/">View Project</a>
                    </div>
                    <div className="second col-md-4 pb-4 pt-4"data-aos="fade-left"data-aos-delay="300">
                        <h2>Kanban</h2>
                        <p> I developed a Kanban-style task management web application using React (Vite), Tailwind CSS, and Drag-and-Drop (Dnd Kit). The project allows users to create, update, and organize tasks into multiple columns.
                        </p>
                        <a href="https://abdelrahmans00.github.io/TodoReact/">View Project</a>
                    </div>
                    <div className="second col-md-4 pb-4 pt-4"data-aos="fade-left"data-aos-delay="400">
                        <h2>Kanban</h2>
                        <p> GameZone is an interactive gaming website that offers three classic games: Memory Game, Snake Game, and Connect 4. Built using React, Tailwind CSS, and JavaScript, the platform provides a smooth and responsive user experience across all devices.
                        </p>
                        <a href="https://abdelrahmans00.github.io/GameZone/#/">View Project</a>
                    </div>
                    <div className="second col-md-4 pb-4 pt-4"data-aos="fade-left"data-aos-delay="500">
                          <h2>Weather API</h2>
                          <p> A responsive weather app built with ReactJS and OpenWeather API, designed for all cities. Features include weekly forecast flip cards, dynamic backgrounds based on conditions, and daily weather tips. 
                          </p>
                          <a href="https://abdelrahmans00.github.io/WeatherAPI/">View Project</a>
                      </div>
                  <div className="second col-md-4 pb-4 pt-4"data-aos="fade-left"data-aos-delay="600">
                          <h2>BlogIt</h2>
                          <p> A full-featured blog application built with Django, allowing users to explore, read, and manage articles with ease. The platform includes user authentication, article creation/editing, rich text formatting with TinyMCE, and a responsive Bootstrap-powered interface. Designed to be simple yet powerful, BlogIt reflects clean backend logic, organized database models, and a smooth user experience.
                          </p>
                          <a href="https://abdelrahmans.pythonanywhere.com/">View Project</a>
                      </div>
                </div>
        </div>
    </div>
  )
}

