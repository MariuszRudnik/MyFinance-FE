import React from 'react';
import { storiesOf } from '@storybook/react';

import styled from 'styled-components';
import { AddWalletComponents } from './AddWalletComponents';

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.background};
`;

storiesOf('Organism/AddWallet', module)
  .addDecorator((story) => <Background>{story()}</Background>)
  .add('Normal', () => <AddWalletComponents />);
