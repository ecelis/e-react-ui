import React from 'react';

import { Button } from './Button';

export default {
  title: 'Control/Button',
  component: Button
}

const Template = args => <Button {...args}>Default</Button>;
export const Default = Template.bind({});
Default.args = {
  primary: false,
  label: 'Default'
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Primary'
}

export const OnClick = Template.bind({});
OnClick.args = {
  label: 'Click Me',
  onClick: () => { console.log('click button'); }
}
