import React from 'react';
import {Autocomplete} from '../components';

export default {
    title: 'Control/Autocomplete',
    component: Autocomplete,
}

export const Default = () => {
    return (<Autocomplete
        suggestions={["Oranges", "Apples", "Banana", "Kiwi", "Mango"] }
    />)
}