import React from 'react';
import { storiesOf } from '@storybook/react';

import styled from 'styled-components';
import { Register } from './Register';
const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.background};
`;

storiesOf('Organism/Register', module)
  .addDecorator((story) => <Background>{story()}</Background>)
  .add('Normal', () => <Register></Register>);
