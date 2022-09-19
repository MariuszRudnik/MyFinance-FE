import React from 'react';
import { storiesOf } from '@storybook/react';

import styled from 'styled-components';
import { Login } from './Login';
const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.background};
`;

storiesOf('Organism/Login', module)
  .addDecorator((story) => <Background>{story()}</Background>)
  .add('Normal', () => <Login></Login>);
