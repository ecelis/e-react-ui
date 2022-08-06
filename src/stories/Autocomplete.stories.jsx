import React from 'react';
import {Autocomplete} from '../components';

export default {
    title: 'Control/Auto Complete',
    component: Autocomplete,
}

const items = ["Oranges", "Apples", "Banana", "Kiwi", "Mango"];
const Template = args => <Autocomplete {...args} />;

export const Default = Template.bind({})
Default.args = {
    items: items
}

export const WithPlaceHolder = Template.bind({});
WithPlaceHolder.args = {
    label: 'Search fruits...',
    items: items
}
