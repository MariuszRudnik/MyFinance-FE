import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';
import styled from 'styled-components';

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.background};
`;

storiesOf('Attoms/Input', module)
  .addDecorator((story) => <Background>{story()}</Background>)
  .add('Normal', () => <Input placeholder="login" />)
  .add('Search', () => <Input placeholder="search" search />);
