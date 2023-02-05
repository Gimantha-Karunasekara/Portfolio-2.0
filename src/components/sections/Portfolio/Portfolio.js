import React from 'react'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Portfolio.css';

import foodies_img from '../../assets/img/portfolio/foodies.svg';
import portfolio_img from '../../assets/img/portfolio/website.svg';


const Portfolio = () => {

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My recent work</span>

      <div className='swiper-container'>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          className="portfolio__container container swiper mySwiper"
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
        >
          <div className="swiper-wrapper">

            <SwiperSlide className="portfolio__content grid swiper-slide" >

                <img src={foodies_img} alt="" className="portfolio__img" />

              <div className="portfolio__data">
                <h3 className="portfolio__title">Foodies</h3>
                <p className="portfolio__description">
                  Java based food ordering Android application which is feature-rich and adaptable to any device form factor.
                </p>
                <a href="https://github.com/Gimantha-Karunasekara/Foodies" className="button button--flex button--small portfolio__button">
                  View
                  <i className="uil uil-github-alt button__icon"></i>
                </a>
              </div>
            </SwiperSlide>


            <SwiperSlide className="portfolio__content grid swiper-slide">
              <img src={portfolio_img} alt="" className="portfolio__img" />

              <div className="portfolio__data">
                <h3 className="portfolio__title">Portfolio website</h3>
                <p className="portfolio__description">
                  Responsive personal portfolio website made using HTML, CSS and Javascript.
                </p>
                <a href="https://github.com/Gimantha-Karunasekara/My-Portfolio" className="button button--flex button--small portfolio__button">
                  View
                  <i className="uil uil-github-alt button__icon"></i>
                </a>
              </div>

            </SwiperSlide>
          </div>

        </Swiper>
        <div className="swiper-button-next" >
          <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
        </div>
        <div className="swiper-button-prev">
          <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  )
}

export default Portfolio