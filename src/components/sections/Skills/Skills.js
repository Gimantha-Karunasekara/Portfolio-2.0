import React from 'react'

import './Skills.css';

const Skills = () => {

  return (
    <section className="skills section" id="skills">
            <h2 className="section__title"> Skills </h2>
                <span className="section__subtitle">My technincal level</span>

                <div className="skills__container container grid ">
                    <div>
                        <div className="skills__content skills__open">
                            <div className="skills__header">
                                <i className="uil uil-brackets-curly skills__icon"></i>
                                <div>
                                    <h1 className="skills__title">Programming</h1>
                                    <span className="skills__subtitle"></span>
                                </div>
                                <i className="uil uil-angle-down skills__arrow"></i>

                            </div>
                            <div className="skills__list grid">
                                <div className="skills__data">
                                    <div className="skills__title">
                                        <h3 className="skills__name">Java</h3>
                                        <span className="skills__number">70%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__precentage skills__java"> </span>
                                    </div>
                                </div>
                                <div className="skills__data">
                                    <div className="skills__title">
                                        <h3 className="skills__name">C</h3>
                                        <span className="skills__number">50%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__precentage skills__c"> </span>
                                    </div>
                                </div>
                                <div className="skills__data">
                                    <div className="skills__title">
                                        <h3 className="skills__name">Python</h3>
                                        <span className="skills__number">50%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__precentage skills__python"> </span>
                                    </div>
                                </div>
                                <div className="skills__data">
                                    <div className="skills__title">
                                        <h3 className="skills__name">HTML</h3>
                                        <span className="skills__number">80%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__precentage skills__html"> </span>
                                    </div>
                                </div>
                                <div className="skills__data">
                                    <div className="skills__title">
                                        <h3 className="skills__name">CSS</h3>
                                        <span className="skills__number">80%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__precentage skills__css"> </span>
                                    </div>
                                </div>
                                <div className="skills__data">
                                    <div className="skills__title">
                                        <h3 className="skills__name">Java Script</h3>
                                        <span className="skills__number">70%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__precentage skills__js"> </span>
                                    </div>
                                </div>
                                <div className="skills__data">
                                    <div className="skills__title">
                                        <h3 className="skills__name">Android application development</h3>
                                        <span className="skills__number">60%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__precentage skills__android"> </span>
                                    </div>
                                </div>
                                <div className="skills__data">
                                    <div className="skills__title">
                                        <h3 className="skills__name">React</h3>
                                        <span className="skills__number">50%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__precentage skills__react"> </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
  )
}

export default Skills