import React from 'react';

import { Header } from './Header';

const meta = {
  title: 'Example/Header',
  component: Header,
};

export default meta;

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
