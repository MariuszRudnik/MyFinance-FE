import React from 'react';
import { storiesOf } from '@storybook/react';

import { theme } from '../../../theme/mainTheme';
import { Sidebar } from './Sidebar';
import styled from 'styled-components';
import store from '../../../Redux/store';
import { Provider } from 'react-redux';
import { withRouter } from 'storybook-addon-react-router-v6/dist/ts/src';
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
  .add('Normal', () => (
    <Provider store={store}>
      <Sidebar></Sidebar>
    </Provider>
  ));
