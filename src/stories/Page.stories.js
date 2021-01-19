import React from 'react';

import { Page } from './Page';
import {
  LoggedIn as HeaderStories_LoggedIn,
  LoggedOut as HeaderStories_LoggedOut,
} from './Header.stories';

export default {
  title: 'Example/Page',
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories_LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories_LoggedOut.args,
};
