import React from 'react';
import { storiesOf } from '@storybook/react';

import styled from 'styled-components';
import { Content } from './Content';
import { withRouter } from 'storybook-addon-react-router-v6/dist/ts/src';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.background};
`;

storiesOf('Molecules/Content', module)
  .addDecorator((story) => <Background>{story()}</Background>)
  .addDecorator(withRouter)
  .add('Normal', () => (
    <Content heading="Hedading">
      <p>dddd</p>
    </Content>
  ));
