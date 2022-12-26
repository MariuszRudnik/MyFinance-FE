import React from 'react';
import { UserPageTemplates } from '../templates/UserPageTemplates';
import { theme } from '../theme/mainTheme';
import { Content } from '../components/Molecules/Content/Content';
import charge from '../../src/components/Assets/ekran.png';
import styled from 'styled-components';
import { EventsWallet } from '../components/Organism/EventsWallet/EventsWallet';

const ImgCenter = styled.img`
  margin: 0 auto;
`;

export const ListOfWallet = () => {
  return (
    <>
      <Content heading="Chart Wallet">
        <ImgCenter src={charge} />
      </Content>
      <Content heading="Wallet operations" widthContent={'530px'}>
        <EventsWallet />
      </Content>
    </>
  );
};
