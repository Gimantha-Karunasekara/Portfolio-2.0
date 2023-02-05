import React from 'react'

import './About.css';
import about_img from '../../assets/img/about.svg';

const About = () => {
  return (
    <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>

            <div className="about__container container grid">   
                <img src={about_img} alt="" className="about__img"/>
                <div className="about__data">
                    <p className="about__description">
                        I am Gimantha Karunasekara, currently I am a student in Curtin Colombo University pursuing a Software Engineering undergraduate degree.
                        Would define my self as a very friendly and helpful person who have ability to work with different people. Seeking for
                        opertunities and learning new things is what I enjoy.
                        I am interested in mobile application development, web application development and related technologies.
                        I am looking forward to refining my skills in any opportunity that I receive.
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
                        <a download="" href="assets/cv.pdf" className="button button--flex">
                            Download CV <i className="uil uil-cloud-download button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default About