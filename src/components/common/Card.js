import React from 'react'
import './Card.css';


const Card = (props) => {

    return (
        <div className='portfolio__card' style={{width: `calc((100% - ${props.limit-1} * 5rem) / ${props.limit})`}}>
            <div className='portfolio__card-side portfolio__card--front'>
                <div style={{backgroundImage: props.img}}  alt="" className="portfolio__img" />
                <h3 className="portfolio__title">{props.title}</h3>
                <p className="portfolio__description">
                    {props.desc}
                </p>
            </div>
            <div className='portfolio__card-side portfolio__card--back'>
                <a href={props.github} className="button--alt button--flex button--small portfolio__button">
                    View
                    <i className="uil uil-github-alt button__icon"></i>
                </a>
            </div>

        </div>
    )
}

export default Card