import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    min-height: fit-content;
    height: ${props => props.height ? `${props.height};` : null};
    width: ${props => props.width ? `${props.width};` : 375}px;
    overflow: ${props => props.overflow ? `${props.overflow};` : null};
    ${props => props.background ? `background: ${props.background};` : `color: inherit;`}
    ${props => props.border ? `border: ${props.border};` : null}
    ${props => props.color ? `color: ${props.color};` : `color: inherit;`}
    ${props => props.justify ? `justify-content: ${props.justify};` : null }
    
`;

Container.propTypes = { 
    background: PropTypes.string,
    color: PropTypes.string,
    border: PropTypes.string,
    overflow: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    justify: PropTypes.string,
}

export default Container;
