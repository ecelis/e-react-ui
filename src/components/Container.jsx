import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    height: ${props => props.height ? props.height : 106}px;
    overflow: ${props => props.overflow ? `${props.overflow};` : null};
    ${props => props.background ? `background: ${props.background};` : `color: inherit;`}
    ${props => props.border ? `border: ${props.border};` : null}
    ${props => props.color ? `color: ${props.color};` : `color: inherit;`}
    
`;

Container.propTypes = {
    background: PropTypes.string,
    color: PropTypes.string,
    border: PropTypes.string,
}

export default Container;
