import React, { useState } from 'react'
import './NavBar.css';

const NavBar = () => {

    const [showNav, setShowNav] = useState(false);

    const showNavHandler = () => {
        setShowNav(true);
    }

    const hideNavHandler = () => {
        setShowNav(false);
    }


    // const navMenu = document.getElementById('nav-menu'),
    //     navToggle = document.getElementById('nav-toggle'),
    //     navClose = document.getElementById('nav-close')

    // // SHOW/Toggle NavBar
    // if (navToggle) {
    //     navToggle.addEventListener('click', () => {
    //         navMenu.classList.add('show-menu')
    //     })
    // }

    // // Close nav
    // if (navClose) {
    //     navClose.addEventListener('click', () => {
    //         navMenu.classList.remove('show-menu')
    //     })
    // }

    // // Hide nav items when selected
    // const navLink = document.querySelectorAll('.nav__link')

    // navLink.forEach(n => n.addEventListener('click', () => {
    //     const navMenu = document.getElementById('nav-menu')
    //     navMenu.classList.remove('show-menu')
    // }))

    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#home" className="nav__logo">Gimantha</a>

                <div className={`nav__menu ${showNav && "show-menu"}`} id="nav-menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-home nav__icon"></i> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-bookmark-alt nav__icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#qualification" className="nav__link">
                                <i className="uil uil-award nav__icon"></i> Qualifications
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <i className="uil uil-bag-alt nav__icon"></i> Portfolio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-envelope nav__icon"></i> Contact Me
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" id="nav-close" onClick={hideNavHandler}></i>
                </div>

                <div className="nav__btns">

                    <i className="uil uil-moon change-theme" id="theme-button"></i>

                    <div className="nav__toggle" id="nav-toggle" onClick={showNavHandler}>
                        <i className="uil uil-bars"></i>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default NavBar