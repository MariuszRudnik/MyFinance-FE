import React from 'react';
import { UserPageTemplates } from '../templates/UserPageTemplates';
import { theme } from '../theme/mainTheme';
import { Content } from '../components/Molecules/Content/Content';
import charge from '../../src/components/Assets/ekran.png';
import styled from 'styled-components';

const ImgCenter = styled.img`
  margin: 0 auto;
`;

export const ListOfWallet = () => {
  return (
    <>
      <UserPageTemplates activeColor={theme.secondary}>
        <Content heading="Chart Wallet">
          <ImgCenter src={charge} />
        </Content>
      </UserPageTemplates>
    </>
  );
};
