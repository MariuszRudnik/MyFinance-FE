import React from 'react';
import { storiesOf } from '@storybook/react';

import bulbIcon from '../../Assets/icons/bulb.svg';
import logoutIcon from '../../Assets//icons/logout.svg';
import penIcon from '../../Assets//icons/pen.svg';
import plusIcon from '../../Assets/icons/plus.svg';
import twitterIcon from '../../Assets/icons/twitter.svg';

import ButtonIconsSidebar from './ButtonIconSidebar';
import styled from 'styled-components';
import { ContentButton } from './content/ContentButton';
const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.background};
`;

storiesOf('Sidebar/ButtonSidebarButton', module)
  .addDecorator((story) => <Background>{story()}</Background>)
  .add('Normal', () => (
    <ButtonIconsSidebar>
      <ContentButton title="Dasboard" icon={twitterIcon} />
    </ButtonIconsSidebar>
  ))
  .add('Small', () => (
    <ButtonIconsSidebar className="active" closed={false}>
      <ContentButton title="Dasboard" icon={twitterIcon} />
    </ButtonIconsSidebar>
  ));
