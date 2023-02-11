import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../context/theme-context';
import { Link } from 'react-scroll';
import * as Scroll from "react-scroll";
import './NavBar.css';

const NavBar = () => {

    const [showNav, setShowNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const { darkTheme, toggleTheme } = useContext(ThemeContext);
    let scrollSpy = Scroll.scrollSpy;

    useEffect(() => {
        scrollSpy.update();
    })

    const showNavHandler = () => {
        setShowNav(true);
    }

    const hideNavHandler = () => {
        setShowNav(false);
    }

    const navBarShadowHandler = () => {
        if (window.scrollY >= 80) {
            setShadow(true);
        }
        else {
            setShadow(false);
        }
        scrollSpy.update();
    };

    window.addEventListener("scroll", navBarShadowHandler);

    return (
        <header className={`header ${shadow && "header-shadow"}`} id="header">
            <nav className="nav container ">
                <a href="#home" className="nav__logo">Gimantha</a>

                <div className={`nav__menu ${showNav && "show-menu"}`} id="nav-menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <Link activeClass='active-link' spy={true} to="home" className="nav__link">
                                <i className="uil uil-home nav__icon"></i> Home
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link activeClass='active-link' spy={true} to="about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i> About
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link activeClass='active-link' spy={true} to="qualification" className="nav__link">
                                <i className="uil uil-award nav__icon"></i> Qualifications
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link activeClass='active-link' spy={true} to="skills" className="nav__link">
                                <i className="uil uil-file-bookmark-alt nav__icon"></i> Skills
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link activeClass='active-link' spy={true} to="portfolio" className="nav__link">
                                <i className="uil uil-bag-alt nav__icon"></i> Portfolio
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link activeClass='active-link' spy={true} to="contact" className="nav__link">
                                <i className="uil uil-envelope nav__icon"></i> Contact Me
                            </Link>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" id="nav-close" onClick={hideNavHandler}></i>
                </div>

                <div className="nav__btns">

                    <i className={`uil change-theme ${!darkTheme ? 'uil-moon' : 'uil-sun'}`} id="theme-button" onClick={toggleTheme}></i>

                    <div className="nav__toggle" id="nav-toggle" onClick={showNavHandler}>
                        <i className="uil uil-bars"></i>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default NavBar