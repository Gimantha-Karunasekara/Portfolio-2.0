import React, { useState } from 'react'

import './Qualifications.css';

const Qualifications = () => {

  const [showEdu, setShowEdu] = useState(true);

  const showEduHandler = () => {
    setShowEdu(true);
  };

  const showWorkHandler = () => {
    setShowEdu(false);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={`qualification__button button--flex ${showEdu && "qualification__active"}`} data-target='#education' onClick={showEduHandler}>
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div className={`qualification__button button--flex ${!showEdu && "qualification__active"}`} data-target='#work' onClick={showWorkHandler}>
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Work
          </div>
        </div>

        <div className="qualification__sections">
          {!showEdu && <div className={`qualification__content ${!showEdu && "qualification__active"}`} data-content id="work">
            <h3 className="noData__msg">Nothing to show here.</h3>
          </div>}
          {showEdu && <div className={`qualification__content ${showEdu && "qualification__active"}`} data-content id="education">

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Diploma in IT</h3>
                <span className="qualification__subtitle">Esoft Metro Collage</span>
                <div className="qualification__date">
                  <i className="uil uil-calendar-alt"></i>
                  2018
                </div>
              </div>

              <div>
                <span className="qualification__point"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__point"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Diploma in Software Engineering</h3>
                <span className="qualification__subtitle">Esoft Metro Collage</span>
                <div className="qualification__date">
                  <i className="uil uil-calendar-alt"></i>
                  2018
                </div>
              </div>


            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Diploma in Web Development</h3>
                <span className="qualification__subtitle">Esoft Metro Collage</span>
                <div className="qualification__date">
                  <i className="uil uil-calendar-alt"></i>
                  2019
                </div>
              </div>

              <div>
                <span className="qualification__point"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__point"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Diploma in Hardware and Networking</h3>
                <span className="qualification__subtitle">Esoft Metro Collage</span>
                <div className="qualification__date">
                  <i className="uil uil-calendar-alt"></i>
                  2019
                </div>
              </div>

            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Engineering Undergraduate</h3>
                <span className="qualification__subtitle">Curtin Colombo</span>
                <div className="qualification__date">
                  <i className="uil uil-calendar-alt"></i>
                  2021 - 2024
                </div>
              </div>

              <div>
                <span className="qualification__point-current">

                </span>
              </div>
            </div>

          </div>}
        </div>
      </div>
    </section>
  )
}

export default Qualifications