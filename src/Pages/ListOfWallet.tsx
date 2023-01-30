import React from 'react';
import { UserPageTemplates } from '../templates/UserPageTemplates';
import { theme } from '../theme/mainTheme';
import { Content } from '../components/Molecules/Content/Content';
import charge from '../../src/components/Assets/ekran.png';
import styled from 'styled-components';
import { EventsWallet } from '../components/Organism/EventsWallet/EventsWallet';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';

import { UrlTypes } from '../types/UrlTypes';
import Modal from '../components/Modal/Modal';
import { AddTransaction } from '../components/Molecules/AddTransation/AddTransaction';
import { navigate } from '@storybook/addon-links';

const ImgCenter = styled.img`
  margin: 0 auto;
`;
const AddButton = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 40px;
  background-color: ${theme.violet};
  bottom: 10%;
  right: 10%;
`;

export const ListOfWallet = () => {
  const navigation = useNavigate();
  return (
    <>
      <Content heading="Chart Wallet">
        <ImgCenter src={charge} />
      </Content>
      <Content heading="Wallet operations" widthContent={'530px'}>
        <EventsWallet />
      </Content>
      <Link to="add">
        <AddButton>+</AddButton>
      </Link>
      <Routes>
        <Route
          path={`/add`}
          element={
            <Modal>
              <AddTransaction />
            </Modal>
          }></Route>
      </Routes>
    </>
  );
};
