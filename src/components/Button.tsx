import * as React from "react";
import { Link } from "react-router-dom";
import * as PropTypes from "prop-types";
import styled, { ThemedStyledFunction } from "styled-components";

export declare interface IBaseButton
  extends ThemedStyledFunction<"button", any, {}, never> {
  /** Id */
  id?: string;
  /** Label for the button */
  label: string;
  /** Name? ?? */
  name?: string;
  /** If true apply primary color to background */
  primary?: boolean;
  /** In case of link type set selected */
  selected?: boolean;
  /** Is this a Pill? */
  itemType?: string;
  /** Children comonents if any */
  children?: string;
  /** URL to navigate to */
  to?: string;
  /** Click handler */
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void | undefined;
}
/**
 * Primary UI component for user interaction
 */
const BaseButton = styled.button`
  /* Adapt the colors based on primary prop */
  height: fit-content;
  max-height: 150px;
  width: fit-content;
  max-width: 300px;
  background: ${({ primary }: IBaseButton) =>
    primary ? "var(--primary)" : "var(--light)"};
  color: ${({ primary }: IBaseButton) =>
    primary ? "var(--light)" : "var(--primary)"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid var(--primary);
  border-radius: 3px;
  &:active {
    transition: all 180ms ease-in-out;
    background: ${({ primary }: IBaseButton) =>
      primary ? "var(--light)" : "var(--primary)"};
    color: ${({ primary }: IBaseButton) =>
      primary ? "var(--primary)" : "var(--light)"};
  }
  &:hover {
    transition: all 180ms linear;
  }
`;

BaseButton.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  primary: PropTypes.bool,
  //@ts-ignore
  onClick: PropTypes.func, // TODO check type for onClick
};

BaseButton.defaultProps = {
  primary: false,
  onClick: undefined,
};

export const Button = ({
  label,
  name,
  primary,
  onClick,
}: IBaseButton): JSX.Element => {
  return (
    // TODO review type
    // @ts-ignore
    <BaseButton name={name} primary={primary} onClick={onClick}>
      {label}
    </BaseButton>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
};

const BasePill = styled(Link)<IBaseButton>`
  display: inline-block;
  height: fit-content;
  max-height: 150px;
  width: fit-content;
  max-width: 300px;
  border-radius: 3px;
  padding: 3px;
  margin: 3px;
  width: 5rem;
  background: ${({ selected }: IBaseButton) =>
    selected ? "var(--primary)" : "var(--light)"};
  color: ${({ selected }: IBaseButton) =>
    selected ? "var(--light)" : "var(--primary)"};
  border: ${({ selected }: IBaseButton) =>
    selected ? "thin solid var(--light)" : "thin solid var(--primary)"};
  border-radius: 32px;
  font-size: 12px;
  text-align: center;
  text-decoration: none;
  &:active {
    transition: all 180ms ease-in-out;
    background: ${({ selected }: IBaseButton) =>
      selected ? "var(--primary)" : "var(--light)"};
    color: ${({ selected }: IBaseButton) =>
      selected ? "var(--light)" : "var(--primary)"};
    border: ${({ selected }: IBaseButton) =>
      selected ? "thin solid var(--light)" : "thin solid var(--primary)"};
  }
  &:visited {
    transition: all 180ms ease-in-out;
    background: ${({ selected }: IBaseButton) =>
      selected ? "var(--primary)" : "var(--light)"};
    color: ${({ selected }: IBaseButton) =>
      selected ? "var(--light)" : "var(--primary)"};
  }
  &:hover {
    background: ${({ selected }: IBaseButton) =>
      selected ? "var(--light)" : "var(--primary)"};
    color: ${({ selected }: IBaseButton) =>
      selected ? "var(--primary)" : "var(--light)"};
    border: ${({ selected }: IBaseButton) =>
      selected ? "thin solid var(--light)" : "thin solid var(--primary)"};
  }
`;

export function Pill({
  id,
  onClick,
  selected,
  itemType,
  children,
  to,
}: IBaseButton): JSX.Element {
  return (
    <BasePill
      id={id}
      // @ts-ignore
      onClick={onClick}
      to={itemType ? `${itemType},${id}` : `${to}`}
      selected={selected}
    >
      {children}
    </BasePill>
  );
}

Pill.propTypes = {
  id: PropTypes.any.isRequired,
  itemType: PropTypes.any,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  to: PropTypes.string,
};

Pill.defaultProps = {
  onClick: undefined,
  selected: false,
};
