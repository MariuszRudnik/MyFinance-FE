import React from 'react';
import { storiesOf } from '@storybook/react';

import { withRouter } from 'storybook-addon-react-router-v6';
import { theme } from '../../../theme/mainTheme';
import { SidebarV2 } from './SidebarV2';

storiesOf('Organisms/SidebarV2', module)
  .addDecorator(withRouter)
  .add('Normal', () => <SidebarV2 />);
