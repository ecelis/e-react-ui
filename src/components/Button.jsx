import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Primary UI component for user interaction
 */
const BaseButton = styled.button`
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
  label: PropTypes.string.isRequired,
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

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
}

const BasePill = styled(Link)`
  display: inline-block;
  border-radius: 3px;
  padding: 3px;
  margin: 3px;
  width: 5rem;
  background: ${props => props.selected ? "var(--primary)" : "lightgrey"};
  color: ${props => props.selected ? "whitesmoke" : "var(--primary)"};
  border: ${props => props.selected ? "thin solid var(--primary)" : "thin solid grey"};
  border-radius: 32px;
  font-size: 12px;
  text-align: center;
  text-decoration: none;
  &:active {
    transition: all 180ms ease-in-out;
    background: ${props => props.primary ? "whitesmoke" : "var(--primary)"};
    color: ${props => props.primary ? "var(--primary)" : "whitesmoke"};
  }
  &:hover {
    background: ${props => props.primary ? "whitesmoke" : "var(--primary)"};
    color: ${props => props.primary ? "var(--primary)" : "whitesmoke"};
  }
`;

export function Pill (props) {
  return (
    <BasePill onClick={props.onClick} id={props.itemId}
      to={props.link ? `${props.to}` : `${props.itemType},${props.itemId}`}
      selected={props.selected}>
      {`${props.label}`}</BasePill>
  );
}

Pill.propTypes = {
  onClick: PropTypes.func,
  itemId: PropTypes.any.isRequired,
  link: PropTypes.string.isRequired,
  itemType: PropTypes.any,
  selected: PropTypes.bool,
  label: PropTypes.string.isRequired
}

Pill.defaultProps = {
  primary: false,
  selected: false,
  label: 'A Link'
}
