import React from 'react'

import './About.css';

import about_img from '../../assets/img/about.svg';
import cv from '../../assets/cv.pdf';

const About = () => {
  return (
    <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>

            <div className="about__container container grid">   
                <img src={about_img} alt="" className="about__img"/>
                <div className="about__data">
                    <p className="about__description">
                        I'm Gimantha, an enthusiastic individual embarking on a coding journey as an aspiring Software Developer. With proficiency in Java, JavaScript, Flutter, React, ReactNative, Node, Python, Docker, Git, Postman, and more, I'm well-equipped to tackle diverse challenges. Friendly and collaborative by nature, I'm always up for a coding adventure and committed to constant learning, striving to enhance my skills and stay up to date with new technologies.
                    </p>

                    <div className="about__info">
                        {/* <div>
                            <span className="about__info-title"> - </span>
                            <span className="about__info-name">Years <br/> experience </span>
                        </div>
                        <div>
                            <span className="about__info-title"> - </span>
                            <span className="about__info-name">Completed <br/> projects</span>
                        </div> */}
                    </div>

                    <div className="about__button">
                        <a download href={cv} className="button button--flex">
                            Download CV <i className="uil uil-cloud-download button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default About