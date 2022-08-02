import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Primary UI component for user interaction
 */
export const BaseButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "var(--primary)" : "var(--light)"};
  color: ${props => props.primary ? "var(--light)" : "var(--primary)"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #6667ab;
  border-radius: 3px;
  &:active {
    transition: all 180ms ease-in-out;
    background: ${props => props.primary ? "var(--light)" : "var(--primary)"};
    color: ${props => props.primary ? "var(--primary)" : "var(--light)"};
  }
  &:hover {
    transition: all 180ms linear;
  }
`;
BaseButton.propTypes = {
  primary: PropTypes.bool,
  onClick: PropTypes.func,
};

BaseButton.defaultProps = {
  primary: false,
  onClick: undefined,
};

export const Button = props => {
  return <BaseButton {...props}>{props.label}</BaseButton>;
}