import React, { Fragment } from 'react'
import Card from './Card';

const SlideShow = (props) => {

    return(
    <Fragment>
        {props.data.slice(0,props.limit).map(p => {
            return (<Card title={p.title} desc={p.desc} img={p.img} github={p.github} limit={props.limit}/>);
        })}
    </Fragment>
    )
}

export default SlideShow