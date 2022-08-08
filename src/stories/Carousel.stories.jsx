import React from 'react';
import {Carousel} from '..';
import { Grid, Row, Col } from '..';

export default {
    title: 'Control/Carousel',
    component: Carousel,
}

const items = [
    {url: "https://source.unsplash.com/random?landscape,mountains", alt:"slide 1"},
    {url: "https://source.unsplash.com/random?landscape,night", alt:"slide 2"},
    {url: "https://source.unsplash.com/random?landscape,city", alt:"slide 3"},
    {url: "https://source.unsplash.com/random?landscape,cars", alt:"slide 4"}
];
const Template = args => <Grid><Row><Col size={4}><Carousel {...args} /></Col></Row></Grid>;

export const Default = Template.bind({});

Default.args = {
    items: items
};
