import React from 'react';
import { storiesOf } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import styled from 'styled-components';
import { SelectedIcon } from './SelectedIcon';
import { WrapperSelected } from './SelectedIcon.css';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.white};
`;

storiesOf('Molecules/SelectorIcon', module)
  .addDecorator((story) => <Background>{story()}</Background>)
  .addDecorator(withRouter)
  .add('Normal', () => <SelectedIcon />);
