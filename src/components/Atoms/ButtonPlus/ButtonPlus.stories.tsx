import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import bulbIcon from '../../Assets/icons/bulb.svg';
import logoutIcon from '../../Assets//icons/logout.svg';
import penIcon from '../../Assets//icons/pen.svg';
import plusIcon from '../../Assets/icons/plus.svg';
import twitterIcon from '../../Assets/icons/add.svg';
import apps from '../../Assets/icons/apps.svg';
import { ButtonPlus } from './ButtonPlus';

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.background};
  width: 500px;
  height: 500px;
`;

storiesOf('Attoms/ButtonPlus', module)
  .addDecorator((story) => <Background>{story()}</Background>)
  .add('Apps', () => <ButtonPlus icon={apps} color="white" />)
  .add('Active', () => <ButtonPlus active icon={bulbIcon} />)
  .add('Logout', () => <ButtonPlus icon={logoutIcon} />)
  .add('Pen', () => <ButtonPlus icon={penIcon} />)
  .add('Plus', () => <ButtonPlus icon={plusIcon} />)
  .add('Twitter', () => <ButtonPlus icon={twitterIcon} />);
