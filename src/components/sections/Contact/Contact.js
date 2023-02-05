import React from 'react'

import './Contact.css';
import contact_img from '../../assets/img/contact.svg';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
            <div className="contact__bg">
            <h2 className="section__title contact__section-title">Contact Me</h2>
            <span className="section__subtitle contact__section-subtiitle">Get in touch</span>
            <div className="grid">
                <img src={contact_img} alt="" className="contact__img" id="contact-img"/>
            </div>
                <div className="contact__container container grid">
                    <div>
                        <div className="contact__information">
                            <i className="uil uil-phone contact__icon"></i>
                            <div>
                                <h3 className="contact__title">Call Me</h3>
                                <span className="contact__subtitle">+9470348437</span>
                            </div>
                        </div>
                        <div className="contact__information">
                            <i className="uil uil-envelope contact__icon"></i>

                            <div>
                                <h3 className="contact__title">Email</h3>
                                <span className="contact__subtitle">gimantha.contact@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    <form className="contact__form grid">
                        <div className="contact__inputs grid">
                            <div className="contact__content">
                                <label htmlFor="" className="contact__label">Name</label>
                                <input type="text" className="contact__input" id="contact__input-name"/>
                            </div>

                            <div className="contact__content">
                                <label htmlFor="" className="contact__label">Email</label>
                                <input type="email" className="contact__input " id="contact__input-email"/>
                            </div>

                            <div className="contact__content">
                                <label htmlFor="" className="contact__label">Message</label>
                                <textarea name="" id="contact__input-msg" cols="0" rows="7" className="contact__input "></textarea>
                            </div>
                            
                            <div>
                                <button href='#' type="submit" onClick="sendEmail()" className="button button--flex contact__btn" id="contact-btn">
                                    Send Message
                                    <i className="uil uil-message button__icon contact__btn-icon"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
  )
}

export default Contact