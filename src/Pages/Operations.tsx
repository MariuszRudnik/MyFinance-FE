import React from 'react';
import { UserPageTemplates } from '../templates/UserPageTemplates';
import { theme } from '../theme/mainTheme';
import { Content } from '../components/Molecules/Content/Content';
import charge from '../../src/components/Assets/ekran.png';
import styled from 'styled-components';
import { EventsOperations } from '../components/Organism/EventsWallet/EventsOperations';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';

import { UrlTypes } from '../types/UrlTypes';
import Modal from '../components/Modal/Modal';
import { AddTransaction } from '../components/Molecules/AddTransation/AddTransaction';
import { navigate } from '@storybook/addon-links';
import CircleIcon from '../components/Atoms/ButtonIcon/CircleIcon';
import plus from '../components/Assets/icons/plus.svg';
import { ButtonPlus } from '../components/Atoms/ButtonPlus/ButtonPlus';

const ImgCenter = styled.img`
  margin: 0 auto;
`;
const AddButton = styled.div`
  position: absolute;
  bottom: 10%;
  right: 10%;
`;

export const Operations = () => {
  const navigation = useNavigate();
  return (
    <>
      {/* <Content heading="Chart Wallet"> */}
      {/*   <ImgCenter src={charge} /> */}
      {/* </Content> */}
      <Content heading="Wallet operations" widthContent={'530px'}>
        <EventsOperations />
      </Content>

      <Link to="add">
        <AddButton>
          <ButtonPlus icon={plus} color="white" />
        </AddButton>
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
