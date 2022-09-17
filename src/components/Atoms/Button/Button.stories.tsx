import React from 'react';
import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import Button from './Button';
import styled from 'styled-components';
const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.background};
`;

storiesOf('Attoms/Button', module)
  .addDecorator((story) => <Background>{story()}</Background>)
  .add('Primary', () => <Button secondary={true}>Click Me</Button>)
  .add('Secondary', () => <Button secondary={false}>Click Me</Button>);
