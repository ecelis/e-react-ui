import React from "react";
import { withRouter } from 'storybook-addon-react-router-v6';
import { Pill } from '..'

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
  id: 1,
  label: 'Default'
};

export const Hyperlink = Template.bind({});
Hyperlink.args = {
  id: 1, url: '#',
  label: 'Hyperlink', 
}

export const OnClick = Template.bind({});
OnClick.args = {
  id: 1, label: 'Click Me',
  onClick: (e) => { e.preventDefault(); console.log('Click pill') }
}
