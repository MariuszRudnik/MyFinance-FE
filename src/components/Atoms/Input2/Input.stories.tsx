import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input2, InputX } from './Input2';
import styled from 'styled-components';

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.white};
`;

storiesOf('Atoms/Input 2', module)
  .addDecorator((story) => <Background>{story()}</Background>)
  .add('Normal', () => <Input2 />)
  .add('Search', () => <InputX />);
