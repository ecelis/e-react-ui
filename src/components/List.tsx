import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled, { ThemedStyledFunction } from 'styled-components';

export declare interface ListProps extends ThemedStyledFunction<"ul", any, {}, never> {
    /** List items JSON */
    items: {
        id: string;
        value: string;
    }[];
    /** flex axis, if 'y' set `display: flex;`, else `null`. */
    axis?: string;
    /** CSS value for `border:` */
    outerBorder?: string;
    /** If true, add `bottom-border` to lit items. */
    innerBorder?: boolean;
}

const Ul = styled.ul`
    ${({ axis }: ListProps) => axis === 'y' ? `display: flex;` : null}
    list-style-type: none;
    padding: 0;
    margin: 0;
    ${({ outerBorder }: ListProps) => outerBorder ? `border: thin solid var(--primary);` : null}
    ${({ innerBorder }: ListProps) => innerBorder ? `
        li {
            ${({ axis }: ListProps) => axis === 'y' ? `margin-right: 3px;` : null}
            div { 
            border-bottom: thin solid var(--primary);
        };
    ` : null}

`;

const List = (props: ListProps) => {
    return (
        <Ul {...props}>
            {props.items.map((item, idx) => {
                return (
                    <li key={idx} id={item.id}><div>{item.value}</div></li>
                );
            })}
        </Ul>
    );
}

List.propTypes = {
    items: PropTypes.array.isRequired,
    outerBorder: PropTypes.bool,
    innerBorder: PropTypes.bool,
    hover: PropTypes.bool,  // TODO check if thse are stil used hover and horizontal
    horizontal: PropTypes.bool
}

export default List;
