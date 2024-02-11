import React from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Portfolio.css';

import foodies_img from '../../assets/img/portfolio/foodies.svg';
import portfolio_img from '../../assets/img/portfolio/website.svg';
import myList_img from '../../assets/img/portfolio/mylist.svg'
import ccet_img from '../../assets/img/portfolio/ccet.svg';
import qr_ticket_page from '../../assets/img/portfolio/qrTicketPage.png';
import weather_app_img from '../../assets/img/portfolio/weather.jpg'

import SlideShow from '../../common/SlideShow';

const portfolio_data = [
  {
    key: "001",
    title: "Ticketing System (Frontend)",
    desc: "Frontend of Ticketing system made for Curtin Colombo Events Team. Book tickets, scan QR, admin dashboard and more.",
    img: ccet_img,
    visit: "https://ccet-ticketing.netlify.app/"
  },
  {
    key: "002",
    title: "MyList",
    desc: "Simple to-do list app to keep track of your tasks. Save your tasks with ease on your own user account. Created using MERN stack.",
    img: myList_img,
    github: "https://github.com/Gimantha-Karunasekara/MyList",
    visit: "https://gimantha-my-list.netlify.app/"
    
  },
  {
    key: "003",
    title: "React Native Weather App",
    desc: "React native weather app with animated backgrounds and current location weather.",
    img: weather_app_img,
    github: "https://github.com/Gimantha-Karunasekara/RN-WeatherApp"
  },
  {
    key: "004",
    title: "Foodies",
    desc: "Java based food ordering Android application which is feature-rich and adaptable to any device form factor.",
    img: foodies_img,
    github: "https://github.com/Gimantha-Karunasekara/Foodies"
  },
  {
    key: "005",
    title: "Animated QR Ticket Page",
    desc: "Animated QR ticket page made using pure HTML, CSS and Javascript.",
    img: qr_ticket_page,
    github: "https://github.com/Gimantha-Karunasekara/QR-Ticket-Page"
  },
  {
    key: "006",
    title: "Portfolio website",
    desc: " Responsive personal portfolio website made using HTML, CSS and Javascript.",
    img: portfolio_img,
    github: "https://github.com/Gimantha-Karunasekara/Portfolio-1.0"
  }
];


const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My recent work</span>

      <div className='portfolio__container'>
        <SlideShow data={portfolio_data}/>
      </div>
    </section>
  )
}

export default Portfolio