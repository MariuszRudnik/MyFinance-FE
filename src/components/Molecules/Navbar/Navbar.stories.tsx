import React from 'react';
import { storiesOf } from '@storybook/react';

import styled from 'styled-components';
import { Navbar } from './Navbar';
import store from '../../../Redux/store';
import { Provider } from 'react-redux';
import { withRouter } from 'storybook-addon-react-router-v6/dist/ts/src';
const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.background};
`;

storiesOf('Molecules/Navbar', module)
  .addDecorator((story) => <Background>{story()}</Background>)
  .addDecorator(withRouter)
  .add('Normal', () => (
    <Provider store={store}>
      <Navbar />)
    </Provider>
  ));
