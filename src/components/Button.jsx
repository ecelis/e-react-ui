import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Primary UI component for user interaction
 */
const BaseButton = styled.button`
  /* Adapt the colors based on primary prop */
  height: fit-content;
  max-height: 150px;
  width: fit-content;
  max-width: 300px;
  background: ${props => props.primary ? "var(--primary)" : "var(--light)"};
  color: ${props => props.primary ? "var(--light)" : "var(--primary)"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid var(--primary);
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
  height: fit-content;
  max-height: 150px;
  width: fit-content;
  max-width: 300px;
  border-radius: 3px;
  padding: 3px;
  margin: 3px;
  width: 5rem;
  background: ${props => props.selected ? "var(--primary)" : "var(--light)"};
  color: ${props => props.selected ? "var(--light)" : "var(--primary)"};
  border: ${props => props.selected ? "thin solid var(--primary)" : "thin solid var(--light)"};
  border-radius: 32px;
  font-size: 12px;
  text-align: center;
  text-decoration: none;
  &:active {
    transition: all 180ms ease-in-out;
    background: ${props => props.primary ? "var(--light)" : "var(--primary)"};
    color: ${props => props.primary ? "var(--primary)" : "var(--light)"};
  }
  &:hover {
    background: ${props => props.primary ? "var(--light)" : "var(--primary)"};
    color: ${props => props.primary ? "var(--primary)" : "var(--light)"};
  }
`;

export function Pill (props) {
  return (
    <BasePill
      onClick={props.onClick}
      id={props.id}
      to={props.to ? `${props.to}` : `${props.itemType},${props.id}`}
      selected={props.selected}>
      {`${props.label}`}</BasePill>
  );
}

Pill.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.any.isRequired,
  to: PropTypes.string.isRequired,
  itemType: PropTypes.any,
  selected: PropTypes.bool,
  label: PropTypes.string.isRequired
}

Pill.defaultProps = {
  primary: false,
  selected: false,
  label: 'A Link'
}
