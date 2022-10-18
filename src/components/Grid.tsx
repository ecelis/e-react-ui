import styled from "styled-components";
import * as PropTypes from "prop-types";

export declare interface IGrid {
  background?: string;
  fontFamily?: string;
}

export declare interface IRow {
  background?: string;
  color?: string;
  hoverColor?: string;
  border?: string;
  justify?: string;
  align?: string;
  collapse?: boolean;
}

export declare interface ICol {
  size?: string;
  background?: string;
  color?: string;
  hoverColor?: string;
  border?: string;
  justify?: string;
  align?: string;
  collapse?: boolean;
}

export const Grid = styled.div`
  ${({ fontFamily }: IGrid) =>
    fontFamily ? `font-family: ${fontFamily};` : null}
  ${({ background }: IGrid) =>
    background ? `background: ${background};` : null}
`;

Grid.propTypes = {
  background: PropTypes.string,
  fontFamily: PropTypes.string,
};

Grid.defaultProps = {
  background: "var(--light)",
  fontFamily: "verdana, san-serif",
};

export const Row = styled.div`
  display: flex;
  ${({ background }: IRow) =>
    background ? `background: ${background};` : `color: inherit;`}
  ${({ color }: IRow) => (color ? `color: ${color};` : `color: inherit;`)}
    ${({ hoverColor }: IRow) => {
    return `
                ${
                  hoverColor
                    ? `&:hover {
                    background: ${hoverColor};
                    transition: all 180ms ease-in-out;`
                    : null
                }
            `;
  }};
`;

const commonDefaults = {
  border: "thin dashed var(--dark)",
  justify: "left",
  align: "left",
  collapse: false,
};

Row.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  border: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
  collapse: PropTypes.bool,
};

Row.defaultProps = commonDefaults;

const media = {
  xs: (styles) => `
    @media only screen and (max-width: 480px) {
        ${styles}
    }`,
};

export const Col = styled.div`
  display: flex;
  flex: ${({ size }: ICol) => size};
  ${({ background }: ICol) =>
    background ? `background: ${background};` : `color: inherit;`}
  ${({ border }: ICol) => (border ? `border: ${border};` : null)}
    ${({ color }: ICol) => (color ? `color: ${color};` : `color: inherit;`)}
    ${({ hoverColor }: ICol) => {
    return `
                ${
                  hoverColor
                    ? `&:hover {
                    background: ${hoverColor};
                    transition: all 180ms ease-in-out;`
                    : null
                }
            `;
  }};
  ${({ justify }: ICol) => (justify ? `justify-content: ${justify};` : null)}
  ${({ collapse, align }: ICol) =>
    collapse &&
    // @ts-ignore
    media[collapse](  // FIX collapse boolean can not be index
      `
        display: none;
        text-align: ${align};
        `
    )}
`;

Col.propTypes = {
  // @ts-ignore
  background: PropTypes.string, // TODO review issue with background
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  border: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
  collapse: PropTypes.bool,
};

// @ts-ignore
Col.defaultProps = commonDefaults; // FIX looks like common default are not that common
