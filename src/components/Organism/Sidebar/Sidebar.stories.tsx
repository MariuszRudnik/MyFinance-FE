import React from 'react';
import { storiesOf } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { withRouter } from 'storybook-addon-react-router-v6';
import { theme } from '../../../theme/mainTheme';

storiesOf('Organisms/Sidebar', module)
  .addDecorator(withRouter)
  .add('Normal', () => <Sidebar activeColor={theme.primary} />);
