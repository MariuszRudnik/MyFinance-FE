import React from 'react';
import { storiesOf } from '@storybook/react';

import { withRouter } from 'storybook-addon-react-router-v6';
import { theme } from '../../../theme/mainTheme';
import { SidebarV2 } from './SidebarV2';
import styled from 'styled-components';
const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.background};
`;

storiesOf('Sidebar/SidebarV2', module)
  .addDecorator((story) => <Background>{story()}</Background>)
  .addDecorator(withRouter)
  .add('Normal', () => <SidebarV2></SidebarV2>);