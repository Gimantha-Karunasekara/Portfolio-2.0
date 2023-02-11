import React from 'react'

import './Footer.css';

const Footer = () => {
  return (
        <footer className="footer section">
            <div className="footer__bg">
                <div className="footer__container grid">
                    <div>
                        <h1 className="footer__title">
                            Gimantha
                        </h1>
                        {/* <span className="footer__subtitle">Software Engineering Undergraduate</span> */}
                    </div>

                    <ul className="footer__links">
                        <li>
                            <a href="#qualification" className="footer__link">Qualifications</a>
                        </li>
                        <li>
                            <a href="#portfolio" className="footer__link">Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact" className="footer__link">Contact Me</a>
                        </li>
                    </ul>

                    <div className="footer__socials">
                        <a href="https://www.linkedin.com/in/gimantha-karunasekara" className="footer__social">
                            <i className="uil uil-linkedin-alt"></i>
                        </a>
                        <a href="https://github.com/Gimantha-Karunasekara" className="footer__social">
                            <i className="uil uil-github-alt"></i>
                        </a>
                        <a href="https://www.instagram.com/gimantha.k/" className="footer__social">
                            <i className="uil uil-instagram"></i>
                        </a>
                        <a href="https://twitter.com/iam_gimantha" className="footer__social">
                            <i className="uil uil-twitter-alt"></i>
                        </a>
                    </div>
                </div>

                <p className="footer__copy">&#169; Gimantha Karunasekara. Allrights reserved.</p>
            </div>
        </footer>
        
  )
}

export default Footer