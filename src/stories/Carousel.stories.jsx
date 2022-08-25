import React from 'react';
import { Carousel, GlobalStyles, Grid, Row, Col } from '..';

export default {
    title: 'Control/Carousel',
    component: Carousel,
}

const items = [
    {src: "https://source.unsplash.com/random?landscape,mountains", alt:"slide 1"},
    {src: "https://source.unsplash.com/random?landscape,night", alt:"slide 2"},
    {src: "https://source.unsplash.com/random?landscape,city", alt:"slide 3"},
    {src: "https://source.unsplash.com/random?landscape,cars", alt:"slide 4"}
];
const Template = args => <Grid><Row><Col size={4}><Carousel {...args} /></Col></Row></Grid>;

export const Default = Template.bind({});

Default.args = {
    items: items
};
