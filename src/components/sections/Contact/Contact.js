import React, { useContext, useReducer, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import './Contact.css';
import contact_light_img from '../../assets/img/contact.svg';
import contact_dark_img from '../../assets/img/contact-dark.svg';
import { ThemeContext } from '../../../context/theme-context';

const Contact = () => {

    const { darkTheme } = useContext(ThemeContext);

    const nameRef = useRef();
    const emailRef = useRef();
    const msgRef = useRef();

    const formReducer = (state, action) => {
        if (action.method === "INPUT_CHANGE") {

            let formIsValid = true;
            for (const inputId in state.inputs) {
                if (!state.inputs[inputId]) {
                    continue;
                }
                if (inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid;
                }
                else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: { value: action.value, isValid: action.isValid }
                },
                isValid: formIsValid
            };

        }
        else if (action.method === "TOUCH_CHANGE") {
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: { ...state.inputs[action.inputId], touched: true }
                }
            };
        }
        else {
            return state;
        }
    };

    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
            name: {
                value: "",
                isValid: false,
                touched: false
            },
            email: {
                value: "",
                isValid: false,
                touched: false
            },
            message: {
                value: "",
                isValid: false,
                touched: false
            }
        },
        isValid: false
    });

    const touchHandler = (id) => {
        dispatch({ method: "TOUCH_CHANGE", inputId: id });
    }

    const changeHandler = (id) => {
        let value;
        let isValid = false;

        if (id === "name") {
            value = nameRef.current.value;
            if (nameRef.current.value.trim().length > 5) {
                isValid = true;
            }
        }
        else if (id === "email") {
            value = emailRef.current.value.trim();
            if (emailRef.current.value.trim()) {
                isValid = /^\S+@\S+\.\S+$/.test(emailRef.current.value.trim());
            }
        }
        else if(id === "message"){
            value = msgRef.current.value;
            if (msgRef.current.value.trim().length > 10) {
                isValid = true;
            }
        }
        dispatch({ method: "INPUT_CHANGE", inputId: id, value: value, isValid: isValid })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (!formState.isValid) {
            toast.error('Check your inputs and try again', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        else {
            sendEmail();
        }
    }

    const sendEmail = () => {
        window.Email.send({
            SecureToken: process.env.REACT_APP_EMAIL_TOKEN,
            To: process.env.REACT_APP_EMAIL_TO,
            From: process.env.REACT_APP_EMAIL_FROM,
            Subject: "Portfolio site - Contact Enquiry",
            Body: "Name: " + nameRef.current.value + "<br><br> Email: " + emailRef.current.value + "<br><br> Message: " + msgRef.current.value
        }).then(
            message => {
                if (message === "OK") {
                    toast.success('Message sent!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }
            }
        );
    };

    return (
        <section className="contact section" id="contact">
            <ToastContainer />
            <div className="contact__bg">
                <h2 className="section__title contact__section-title">Contact Me</h2>
                <span className="section__subtitle contact__section-subtiitle">Get in touch</span>
                <div className="grid">
                    <img src={darkTheme ? contact_dark_img : contact_light_img} alt="" className="contact__img" id="contact-img" />
                </div>
                <div className="contact__container container grid">
                    <div>
                        <div className="contact__information">
                            <i className="uil uil-phone contact__icon"></i>
                            <div>
                                <h3 className="contact__title">Call Me</h3>
                                <span className="contact__subtitle">+94723220813</span>
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
                                <input
                                    ref={nameRef}
                                    type="text"
                                    className="contact__input"
                                    id="contact__input-name"
                                    onBlur={() => touchHandler("name")}
                                    onChange={() => changeHandler("name")}
                                />
                            </div>
                            {!formState.inputs.name.isValid && formState.inputs.name.touched && <p className='error-text'>Please include a name</p>}

                            <div className="contact__content">
                                <label htmlFor="" className="contact__label">Email</label>
                                <input
                                    ref={emailRef}
                                    type="email"
                                    className="contact__input "
                                    id="contact__input-email"
                                    onBlur={() => touchHandler("email")}
                                    onChange={() => changeHandler("email")}
                                />
                            </div>
                            {!formState.inputs.email.isValid && formState.inputs.email.touched && <p className='error-text'>Please enter a valid email</p>}

                            <div className="contact__content">
                                <label htmlFor="" className="contact__label">Message</label>
                                <textarea
                                    ref={msgRef}
                                    name=""
                                    id="contact__input-msg"
                                    cols="0"
                                    rows="7"
                                    className="contact__input"
                                    onBlur={() => touchHandler("message")}
                                    onChange={() => changeHandler("message")}
                                />
                            </div>
                            {!formState.inputs.message.isValid && formState.inputs.message.touched && <p className='error-text'>Please enter a message (10 characters minimum)</p>}

                            <div>
                                <button type="button" onClick={submitHandler} className="button button--flex contact__btn" id="contact-btn">
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