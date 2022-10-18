import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled, { ThemedStyledFunction } from 'styled-components';

export declare interface IList extends ThemedStyledFunction<"ul", any, {}, never> {
    /** List items JSON */
    items: {
        id: string;
        value: string;
    }[];
    /** Make list items horizontal, if 'y' set `display: flex;`, else `null`. */
    axis?: string;
    /** CSS value for `border:` */
    outerBorder?: boolean;
    /** If true, add `bottom-border` to lit items. */
    innerBorder?: boolean;
}

const Ul = styled.ul`
    ${({ axis }: IList) => axis === 'y' ? `display: flex;` : null}
    list-style-type: none;
    padding: 0;
    margin: 0;
    ${({ outerBorder }: IList) => outerBorder ? `border: thin solid var(--primary);` : null}
    ${({ innerBorder }: IList) => innerBorder ? `
        li {
            ${({ axis }: IList) => axis === 'y' ? `margin-right: 3px;` : null}
            div { 
            border-bottom: thin solid var(--primary);
        };
    ` : null}

`;

const List = (props: IList): JSX.Element => {
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
