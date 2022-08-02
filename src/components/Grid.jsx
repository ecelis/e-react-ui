import styled from "styled-components";
import './e-react-ui.css';

export const Grid = styled.div``;

export const Row = styled.div`
    display: flex;
    ${props => 
        {
            if(props.hoverColor) {
                return `&:hover {
                    background: #6667ab4f;
                    transition: all 180ms ease-in-out;
                }`
            }
        }
    };
    
`;

const media = {
    xs: (styles) => `
    @media only screen and (max-width: 480px) {
        ${styles}
    }`
}

export const Col = styled.div`
    flex: ${(props) => props.size};
    ${(props) => props.collapse && media[props.collapse](`
    display: none;
    text-align: ${props.align};
    `)}
`;
