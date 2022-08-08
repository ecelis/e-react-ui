import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import {Calendar} from '../';

export default {
    title: 'Control/Calendar',
    component: Calendar,
    decorators: [withRouter],
    parameters: {
      reactRouter: {
        routePath: '/',
      }
    }
  }
  
export const Default = () => {
    return <Calendar />
}