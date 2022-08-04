import React from "react";
import { withRouter } from 'storybook-addon-react-router-v6';
import { Pill } from '../components'

export default {
    title: 'Control/Pill',
    component: Pill,
    decorators: [withRouter],
    parameters: {
      reactRouter: {
        routePath: '/',
      }
    }
};

const Template = args => <Pill {...args} />;
export const Default = Template.bind({});
Default.args = {
  itemId: 1,
  link: '#',
  label: 'A Link'
};

