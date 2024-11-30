import React, { useContext } from 'react'
import './Home.css';
import home_light_img from '../../assets/img/home.svg';
import home_dark_img from '../../assets/img/home-dark.svg';
import Typed from 'typed.js';
import { ThemeContext } from '../../../context/theme-context';

const Home = () => {

    const {darkTheme} = useContext(ThemeContext);

    const el = React.useRef(null);
    const typed = React.useRef(null);

    React.useEffect(() => {
        const options = {
            strings: [
                'Software Engineering Graduate',
                'Software Developer'
            ],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        };

        typed.current = new Typed(el.current, options);

        return () => {
            typed.current.destroy();
        }

    }, []);


    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <div className="home__social">
                        <a href="https://www.linkedin.com/in/gimantha-karunasekara" className="home__social-icon">
                            <i className="uil uil-linkedin-alt"></i>
                        </a>
                        <a href="https://github.com/Gimantha-Karunasekara" className="home__social-icon">
                            <i className="uil uil-github-alt"></i>
                        </a>
                        <a href="https://www.instagram.com/gimantha.k/" className="home__social-icon">
                            <i className="uil uil-instagram"></i>
                        </a>
                        <a href="https://twitter.com/iam_gimantha" className="home__social-icon">
                            <i className="uil uil-twitter-alt"></i>
                        </a>

                    </div>

                    <div className="home__img">
                        <img src={darkTheme ? home_dark_img : home_light_img} alt="" className="home__img" id="home-img" />
                    </div>

                    <div className="home__data">
                        <h1 className="home__title">Hi, I'm Gimantha</h1>
                        <h3 className="home__subtitle"><span ref={el}></span></h3>
                        <p className="home__description">
                            Software Engineering Graduate from Curtin Colombo University. 
                            Enthusiast in web and mobile application development.
                        </p>
                        <a href="#contact" className="button button--flex">
                            Contact Me <i className="uil uil-envelope button__icon"></i>
                        </a>
                    </div>
                </div>
                <div className="home__scroll">
                    <a href="#about" className="home__scroll-button button--flex">
                        <i className="uil uil-mouse-alt home__scroll-mouse"></i>
                        <span className="home__scroll-name">Scroll down</span>
                        <i className="uil uil-arrow-down home__scroll-arrow"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Home