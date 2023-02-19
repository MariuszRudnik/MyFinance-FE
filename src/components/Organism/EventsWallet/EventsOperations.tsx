import React, { useReducer, useState } from 'react';
import CircleIcon from '../../Atoms/ButtonIcon/CircleIcon';
import smile from '../../Assets/icons/smile.svg';
import { theme } from '../../../theme/mainTheme';
import styled from 'styled-components/macro';
import Paragraph from '../../Atoms/Paragraph/Paragraph';
import { useQuery } from 'react-query';
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { getOperations } from '../../Utils/featchHelper';
import { Operations } from '../../../types/Category/GetOperations';
import { formatCurrency } from '../../Utils/formatCurrency';
import Modal from '../../Modal/Modal';
import { AddTransaction } from '../../Molecules/AddTransation/AddTransaction';
import { EditTransaction } from '../../Molecules/EditTransaction/EditTransaction';
interface ReducerType {
  type: string;
}

const OperationWrapper = styled.div`
  display: flex;
  width: 450px;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  padding: 15px;

  &:hover {
    background-color: ${theme.textColor};
    border-radius: 10px;
    cursor: pointer;
  }
  &:hover div p {
    color: ${theme.secondary};
  }
`;
const OperationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;
const DescriptionStyle = styled.div`
  margin: 0 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 70%;
`;
const Text = styled.p`
  font-family: 'Roboto-Regular', 'Roboto-Bold', 'Roboto-Italic', 'Roboto-Light', sans-serif;
  margin: 0;
  font-weight: bold;
  color: ${theme.textColor};
  font-size: ${theme.fontSize.s};
  font-size: ${theme.fontSize.s};
  text-transform: capitalize;
`;
const ChangePageDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NextButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: none;
  margin: 10px;
  background: ${theme.tertiary};

  &:active {
    background: ${theme.textColor};
  }
`;

const actionType = {
  add: 'ADD',
  subtraction: 'SUBTRACTION'
};

export const EventsOperations = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [pageNumberQuery, setPageNumberQuery] = useState(0);
  const { data, isLoading, error } = useQuery(
    ['operations', { id }, pageNumberQuery],
    getOperations
  );
  const [transactionData, setTransactionData] = useState([]);

  const editTransaction = (item: any) => {
    setTransactionData(item);
    navigate(`./edit/${item.id}`);
  };

  const reducer = (state: number, action: ReducerType) => {
    switch (action.type) {
      case actionType.add:
        if (state >= data.pagesCount) {
          state = data.pagesCount;
          return state;
        }
        state++;
        setPageNumberQuery(state - 1);
        return state;
      case actionType.subtraction:
        if (state <= 1) {
          state = 1;
          return state;
        }
        state--;
        setPageNumberQuery(state - 1);
        return state;
    }
    return state;
  };
  const [state, dispatch] = useReducer(reducer, 1);

  let transaction = [];
  if (data != undefined) {
    const { transactionItems, pagesCount } = data;
    transaction = transactionItems.map((item: Operations) => (
      <div key={item.id}>
        <OperationsWrapper>
          <OperationWrapper
            onClick={() =>
              editTransaction({
                id: item.id,
                operations: item.operations,
                category: item.category,
                data: item.date,
                description: item.description,
                name: item.name,
                parentCategory: item.parentCategory,
                price: item.price
              })
            }>
            <div>
              <CircleIcon
                color={item.operations == 'expenditure' ? theme.quaternary : theme.approve}
                icon={smile}></CircleIcon>
            </div>
            <DescriptionStyle>
              <Text key={item.id}>{item.name}</Text>
              <Text>{`${new Date(item.date).toLocaleString('en', { dateStyle: 'long' })}`}</Text>
            </DescriptionStyle>
            <Paragraph
              color={item.operations == 'expenditure' ? theme.error : theme.approve}
              key={item.id}>
              {item.operations == 'expenditure' ? '-' : ' '}
              {formatCurrency(`${item.price}`)}
            </Paragraph>
          </OperationWrapper>
        </OperationsWrapper>
      </div>
    ));
  }

  return (
    <>
      {transaction}
      <ChangePageDiv>
        <NextButton onClick={() => dispatch({ type: actionType.subtraction })}> - </NextButton>
        <p> {state} </p>
        <NextButton onClick={() => dispatch({ type: actionType.add })}> + </NextButton>
      </ChangePageDiv>

      <Routes>
        <Route
          path={`/edit/:idTransaction`}
          element={
            <Modal>
              <EditTransaction data={transactionData} />
            </Modal>
          }></Route>
      </Routes>
    </>
  );
};
