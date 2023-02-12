import React, { useReducer, useState } from 'react';
import CircleIcon from '../../Atoms/ButtonIcon/CircleIcon';
import smile from '../../Assets/icons/smile.svg';
import { theme } from '../../../theme/mainTheme';
import styled from 'styled-components/macro';
import Paragraph from '../../Atoms/Paragraph/Paragraph';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getOperations } from '../../Utils/featchHelper';
import { Operations } from '../../../types/Category/GetOperations';
import { formatCurrency } from '../../Utils/formatCurrency';
interface ReducerType {
  type: string;
}

const OperationWrapper = styled.div`
  display: flex;
  width: 450px;
  height: 80px;
  justify-content: space-between;
  align-items: center;
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
const actionType = {
  add: 'ADD',
  subtraction: 'SUBTRACTION'
};

export const EventsOperations = () => {
  const { id } = useParams();
  const [pageNumberQuery, setPageNumberQuery] = useState(0);
  const { data, isLoading, error } = useQuery(
    ['operations', { id }, pageNumberQuery],
    getOperations
  );

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
    transaction = transactionItems.map((input: Operations) => (
      <div key={input.id}>
        <OperationsWrapper>
          <OperationWrapper>
            <CircleIcon
              color={input.operations == 'expenditure' ? theme.quaternary : theme.approve}
              icon={smile}></CircleIcon>
            <DescriptionStyle>
              <Text key={input.id}>{input.name}</Text>
              <Text>{`${new Date(input.date).toLocaleString('pl', { dateStyle: 'long' })}`}</Text>
            </DescriptionStyle>
            <Paragraph
              color={input.operations == 'expenditure' ? theme.error : theme.approve}
              key={input.id}>
              {input.operations == 'expenditure' ? '-' : ' '}
              {formatCurrency(`${input.price}`)}
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
        <button onClick={() => dispatch({ type: actionType.subtraction })}> - </button>
        <p> {state} </p>
        <button onClick={() => dispatch({ type: actionType.add })}> + </button>
      </ChangePageDiv>
    </>
  );
};
