import * as React from 'react';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';

export declare interface IContainer {
    background?: string;
    height?: number;
    width?: number;
    overflow?: string;
    border?: string;
    color?: string;
    justify?: string;
}

const Container = styled.div`
    min-height: fit-content;
    height: ${({height}: IContainer) => height ? `${height};` : null};
    width: ${({width}: IContainer) => width ? `${width};` : 375}px;
    overflow: ${({overflow}: IContainer) => overflow ? `${overflow};` : null};
    ${({background}: IContainer) => background ? `background: ${background};` : `color: inherit;`}
    ${({border}: IContainer) => border ? `border: ${border};` : null}
    ${({color}: IContainer) => color ? `color: ${color};` : `color: inherit;`}
    ${({justify}: IContainer) => justify ? `justify-content: ${justify};` : null }
`;

Container.propTypes = { 
    background: PropTypes.string,
    color: PropTypes.string,
    border: PropTypes.string,
    overflow: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    justify: PropTypes.string,
}

export default Container;
