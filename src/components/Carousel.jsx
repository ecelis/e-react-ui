import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CarouselGrid = styled.div`
    height: 100vh;
    display: grid;
    place-items: center;
    align-items: start;
`;
const CarouselContainer = styled.div`
    width: 100%;
    max-width: 800px;
    height: ${props => props.height ? `${props.height};` : `350px;`}
    position: relative;
    overflow: hidden;
    border-radius: 16px;
`;
const Slide = styled.div`
    width: 100%;
    max-width: 800px;
    height: ${props => props.height ? `${props.height};` : `350px;`}
    transform: ${props => `translateX(${(props.x - props.slide) * 100}%);`}
    img {
        width: 100%;
        height: ${props => props.height ? `${props.height};` : `350px;`}
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
`;
const ButtonPrev = props => {
    return <CarouselButton {...props} direction="left">{props.label}</CarouselButton>
}
const ButtonNext = props => {
    return <CarouselButton {...props} direction="right">{props.label}</CarouselButton>
}
const Slides = props => {
    return props.items.map((item, idx) => {
        return (<Slide key={idx} x={idx} slide={props.slide}>
            <img
            src={`${item.url}`}
            alt={`${item.alt}`}
            />
        </Slide>)
        }
    );
}

export default function Carousel(props) {
    const [slide, setSlide] = useState(0);
    const slideNum = props.items.length - 1;

    const handler = e => {
        if (e.target.id === 'next') {
            if(slide === slideNum) {
                setSlide(0);
            } else {
                setSlide(slide+1);
            }
        } else if(e.target.id === 'prev') {
            if(slide === 0) {
                setSlide(slideNum);
            } else {
                setSlide(slide-1);
            }
        }
    }
    return (
        <CarouselGrid>
            <CarouselContainer>
                <Slides items={props.items} slide={slide} />
                <ButtonPrev id="prev" label="<" onClick={handler} />
                <ButtonNext id="next" label=">" onClick={handler} />
            </CarouselContainer>
        </CarouselGrid>
    );    
}

Carousel.propTypes = {
    items: PropTypes.array.isRequired,
}
