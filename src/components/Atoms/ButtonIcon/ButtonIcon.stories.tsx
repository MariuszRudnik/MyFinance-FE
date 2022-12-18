import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import bulbIcon from '../../Assets/icons/bulb.svg';
import logoutIcon from '../../Assets//icons/logout.svg';
import penIcon from '../../Assets//icons/pen.svg';
import plusIcon from '../../Assets/icons/plus.svg';
import twitterIcon from '../../Assets/icons/add.svg';
import apps from '../../Assets/icons/apps.svg';
import ButtonIcon from './ButtonIcon';

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.background};
  width: 500px;
  height: 500px;
`;

storiesOf('Attoms/ButtonIcon', module)
  .addDecorator((story) => <Background>{story()}</Background>)
  .add('Apps', () => <ButtonIcon icon={apps} color="white" />)
  .add('Active', () => <ButtonIcon active icon={bulbIcon} />)
  .add('Logout', () => <ButtonIcon icon={logoutIcon} />)
  .add('Pen', () => <ButtonIcon icon={penIcon} />)
  .add('Plus', () => <ButtonIcon icon={plusIcon} />)
  .add('Twitter', () => <ButtonIcon icon={twitterIcon} />);
