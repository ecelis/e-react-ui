import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const Slider = styled.div`
    z-index: 300;
    width: 100%;
    max-width: 800px;
    height: 350px;
    position: relative;
    overflow: hidden;
    border-radius: 36px;`;

const Slide = styled.div`
    width: 100%;
    max-width: 800px;
    height: 350px;
    position: absolute;
    transition: all 0.5s;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const CarouselButton = styled.button`
    position: absolute;
    width: 40px;
    height: 40px;
    padding: 10px;
    border: none;
    border-radius: 50%;
    z-index: 10px;
    cursor: pointer;
    background-color: #fff;
    font-size: 18px;
    ${props => `
        ${props.direction === 'left' ? `
        top: 45%;
        left: 2%;
        ` : `
        top: 45%;
        right: 2%;
        `}
    `}
    &:active {
        transform: scale(1.1);
    }
    &:hover {
        transform: scale(1.1);
    }
`;

export default function Carousel (props) {
    const [state, setState] = useState({
        currentSlide: 0
    });
    useEffect(() => {
        document.onkeydown = keyHandler;
    });

    const slideCount = props.items.length - 1;

    const nextHandler = () => {
        if(state.currentSlide === slideCount) {
            setState({...state, ...{currentSlide: 0}})
        } else {
            setState({
                ...state,
                ...{currentSlide: state.currentSlide + 1}
            })
        }
    }

    const keyHandler = (e) => {
        e = e || window.event;
    
        switch (e.code) {
            case 'ArrowRight':  // next, right arrow
                nextHandler();
            break;
            case 'ArrowLeft':  // prev, left arrow
                prevHandler()
            break;
            default:
                break;
        }
    }
    
    const prevHandler = () => {
        if(state.currentSlide === 0) {
            setState({
                ...state,
                ...{currentSlide: slideCount}
            });
        } else {
            setState({
                ...state,
                ...{currentSlide: state.currentSlide - 1}
            })
        }
    }

    return (
        <Slider>
            {props.items.map((photo, idx) => {
                return (<Slide key={photo.id} style={{
                    transform: `translateX(${100 * (idx - state.currentSlide)}%)`
                }}>
                    <img id={idx} key={idx}
                        src={photo.src}
                        alt={photo.alt}
                    />
                </Slide>)
            })}
            <CarouselButton direction="right"
                onClick={nextHandler}>{'>'}</CarouselButton>
            <CarouselButton direction="left"
                onClick={prevHandler}>{'<'}</CarouselButton>
        </Slider>
    );
}

Carousel.propTypes = {
    items: PropTypes.array.isRequired
}
