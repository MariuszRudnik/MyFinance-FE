import React from 'react';
import { storiesOf } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import styled from 'styled-components';
import { Accordion } from './Accordion';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.white};
`;

storiesOf('Molecules/Content', module)
  .addDecorator((story) => <Background>{story()}</Background>)
  .addDecorator(withRouter)
  .add('Normal', () => <Accordion />);
