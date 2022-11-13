import React from 'react';
import { storiesOf } from '@storybook/react';
import { SelectOption } from './SelectOption';
import styled from 'styled-components';

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.background};
`;

// let ar = ['css', 'js'];
//
// storiesOf('Attoms/SelectOption', module)
//   .addDecorator((story) => <Background>{story()}</Background>)
//   .add('Normal', () => <Detalist array={ar} />);
