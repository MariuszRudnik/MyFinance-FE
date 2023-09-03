import React from 'react';
import { Content } from '../components/Molecules/Content/Content';
import styled from 'styled-components';
import { EventsOperations } from '../components/Organism/EventsWallet/EventsOperations';
import { Link, Route, Routes } from 'react-router-dom';
import Modal from '../components/Modal/Modal';
import { AddTransaction } from '../components/Molecules/AddTransation/AddTransaction';
import plus from '../components/Assets/icons/plus.svg';
import { ButtonPlus } from '../components/Atoms/ButtonPlus/ButtonPlus';
import { ChartModule } from '../components/Organism/ChartModule/chartModule';

const AddButton = styled.div`
  position: fixed;
  bottom: 10%;
  right: 10%;
`;

export const Operations = () => {
  return (
    <>
      <Content heading="Chart Wallet">
        <ChartModule />
      </Content>
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
