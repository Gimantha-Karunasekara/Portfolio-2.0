import React, { useEffect, useLayoutEffect, useState } from 'react'
import './SlideShow.css';

const SlideShow = (props) => {

    const [limit, setLimit] = useState(1);
    const [slideRange, setSlideRange] = useState({ from: 0, to: 1 });

    useLayoutEffect(() => {
        function updateSize() {
            if (window.innerWidth > 1000) {
                setSlideRange({ from: 0, to: 3 });
                setLimit(3);
            }
            else if (window.innerWidth > 700) {
                setSlideRange({ from: 0, to: 2 });
                setLimit(2)
            }
            else {
                setSlideRange({ from: 0, to: 1 });
                setLimit(1)
            }
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, [])

    const slidesNavigate = (action) => {
        if (action === "next") {
            if (limit === 1) {
                if (props.data[slideRange.to]) {
                    setSlideRange((prevState) => {
                        return { from: prevState.to, to: prevState.to + 1 };
                    })
                }
            }
            if (limit === 2) {
                if (props.data[slideRange.to + 1]) {
                    setSlideRange((prevState) => {
                        return { from: prevState.to, to: prevState.to + 2 };
                    })
                }
                else if (props.data[slideRange.to]) {
                    setSlideRange((prevState) => {
                        return { from: prevState.to, to: prevState.to + 1 };
                    })
                }
            }
            if (limit === 3) {
                if (props.data[slideRange.to + 2]) {
                    setSlideRange((prevState) => {
                        return { from: prevState.to, to: prevState.to + 3 };
                    })
                }
                if (props.data[slideRange.to + 1]) {
                    setSlideRange((prevState) => {
                        return { from: prevState.to, to: prevState.to + 2 };
                    })
                }
                else if (props.data[slideRange.to]) {
                    setSlideRange((prevState) => {
                        return { from: prevState.to, to: prevState.to + 1 };
                    })
                }
            }
        }
        else if (action === "prev") {
            if (limit === 1) {
                if (props.data[slideRange.from - 1]) {
                    setSlideRange((prevState) => {
                        return { from: prevState.from - 1, to: prevState.to -1 };
                    })
                }
            }
            else if (limit === 2) {
                if (props.data[slideRange.from - 2]) {
                    setSlideRange((prevState) => {
                        return { from: prevState.from - 2, to: prevState.from };
                    })
                }
                else if (props.data[slideRange.from - 1]) {
                    setSlideRange((prevState) => {
                        return { from: prevState.from - 1, to: prevState.from };
                    })
                }
            }
            else if (limit === 3) {
                if (props.data[slideRange.from - 3]) {
                    setSlideRange((prevState) => {
                        return { from: prevState.from - 3, to: prevState.from };
                    })
                }
                else if (props.data[slideRange.from - 2]) {
                    setSlideRange((prevState) => {
                        return { from: prevState.from - 2, to: prevState.from };
                    })
                }
                else if (props.data[slideRange.from - 1]) {
                    setSlideRange((prevState) => {
                        return { from: prevState.from - 1, to: prevState.from };
                    })
                }
            }
        }
    };

    return (
        <div className='slideshow'>
            <div className='slideshow__button slideshow__button--prev' onClick={() => slidesNavigate("prev")}>
                <i className='slideshow__button-icon uil-angle-left-b'/>
            </div>
            <div className='slideshow__container'>
                {props.data.slice(slideRange.from, slideRange.to).map(p => {
                    return (<Card
                        key={p.key}
                        title={p.title}
                        desc={p.desc}
                        img={p.img}
                        github={p.github}
                        limit={limit}
                    />);
                })}
            </div>
            <div className='slideshow__button slideshow__button--next' onClick={() => slidesNavigate("next")}>
                <i className='slideshow__button-icon uil-angle-right-b'/>
            </div>
        </div>

    )
}

export default SlideShow