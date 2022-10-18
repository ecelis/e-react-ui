import * as React from "react";
import List from '../components/List';

export default {
    title: 'Control/List',
    component: List
}

const items = [
    {id: 0, value: 'Item 0'},
    {id: 1, value: 'Item 1'},
    {id: 2, value: 'Item 2'},
    {id: 3, value: 'Item 3'}
];

const Template = args => <List {...args} />;
export const Default = Template.bind({});
Default.args = {
    items: items
}

export const OuterBorders = Template.bind({});
OuterBorders.args = {
    items: items,
    outerBorder: true
}

export const InnerBorders = Template.bind({});
InnerBorders.args = {
    items: items,
    innerBorder: true,
}

export const HorizontalList = Template.bind({});
HorizontalList.args = {items: items, axis: 'y'}
