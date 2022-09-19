import React from 'react';
import { storiesOf } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import styled from 'styled-components';
import { Navbar } from './Navbar';
const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.background};
`;

storiesOf('Molecules/Navbar', module)
  .addDecorator((story) => <Background>{story()}</Background>)
  .addDecorator(withRouter)
  .add('Normal', () => <Navbar></Navbar>);
