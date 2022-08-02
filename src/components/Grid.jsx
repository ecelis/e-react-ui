import styled from "styled-components";

export const Grid = styled.div`
    ${props => props.fontFamily ? `font-family: ${props.fontFamily};` : null}
    ${props => props.background ? `background: ${props.background};` : null}
`;

export const Row = styled.div`
    display: flex;
    ${props => props.background ? `background: ${props.background};` : `color: inherit;`}
    ${props => props.color ? `color: ${props.color};` : `color: inherit;`}
    ${props => 
        {
            return `
                ${props.hoverColor ? `&:hover {
                    background: ${props.hoverColor};
                    transition: all 180ms ease-in-out;` : null}
            `;
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
    display: flex;
    flex: ${(props) => props.size};
    ${props => props.background ? `background: ${props.background};` : `color: inherit;`}
    ${props => props.border ? `border: ${props.border};` : null}
    ${props => props.color ? `color: ${props.color};` : `color: inherit;`}
    ${props => 
        {
            return `
                ${props.hoverColor ? `&:hover {
                    background: ${props.hoverColor};
                    transition: all 180ms ease-in-out;` : null}
            `;
        }
    };
    ${props => props.justify ? `justify-content: ${props.justify};` : null}
    ${(props) => props.collapse && media[props.collapse](
        `
        display: none;
        text-align: ${props.align};
        `
    )}
`;
