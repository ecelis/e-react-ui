import React from 'react';
import {Container} from '..';

export default {
    title: 'Control/Container',
    component: Container,
}

const items = Array(100).fill('Item',0,200);
const Children = () => {
    return (<ul>
        {items.map(i => <li key={i}>{i}</li>)}
    </ul>)
}
const Template = args => <Container {...args}><Children /></Container>;
export const Default = Template.bind({});
Default.args = {
}

export const ScrollAuto = Template.bind({});
ScrollAuto.args = {
    overflow: 'auto'
}

