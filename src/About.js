import React from 'react'
import './About.scss';
//import "bootstrap/dist/css/bootstrap.min.css";
import html from './Icons/HTML5.svg';
import css from './Icons/css.svg';
import js from './Icons/javascript.svg';
import python from './Icons/python.svg';
import sass from './Icons/sass.svg';
import reactjs from './Icons/react.svg';
import jQuery from './Icons/jquery.svg';

function About() {
    return (
        <section className="about" id="about">
            <article className="header">
                About
            </article>
            <div className="cont2">
                <article className="about__info">

                    <h1> Who am I ? </h1>
                    <p>
                        <code>
                        Be welcolme. 

                        I'm a passionate software developer.
                        
                        I'm seeking for a job in tech company. My best soft skills are responsibility,
                        team work, communication, always open to new knowledge, passion and self-thought.
                        I have knowledge in Agile methodologies like SCRUM.
                        </code> 
    
                    </p>
                    <button className="CV">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                            </svg> Download CV 
                    </button>
                </article>
                <article className="about__techs">
                    <h1> Skills </h1>

                    <div className="skills" title="HTML5">
                        <img src={html} alt="/" />
                    </div>
                    <div className="skills" title="CSS3">
                        <img src={css} alt="/" />
                    </div>
                    <div className="skills" title="JavaScript">
                        <img src={js} alt="/"   />
                    </div>                    
                    <div className="skills" title="Python3">
                        <img src={python} alt="/" />
                    </div>                    
                    <div className="skills" title="Sass">
                        <img src={sass} alt="/" />
                    </div>
                    <div className="skills" title="ReactJS">
                        <img src={reactjs} alt="/" />
                    </div>
                    <div className="skills" title="JQuery">
                        <img src={jQuery} alt="/" />
                    </div>
                    
                </article>
            </div>
        </section>
    )
}

export default About
