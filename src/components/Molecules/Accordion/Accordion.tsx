// @types/react/index.d.ts
declare module 'react' {
  interface Attributes {
    css?: any;
  }
}
import Paragraph from '../../Atoms/Paragraph/Paragraph';
import { AddBudgetCategory } from '../AddBudgetCategory/AddBudgetCategory';
import React, { useState } from 'react';
import expandLess from '../../Assets/icons/expand-less.svg';
import { BudgetCategoryList } from '../BudgetCategoryList/BudgetCategoryList';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.white300};
  border-radius: 20px;
  width: 70%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.white};
`;
const NameWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  cursor: pointer;
  overflow: hidden;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.white300};
  border: 2px solid ${({ theme }) => theme.white300};
`;
const ActiveIcon = styled.img`
  margin: 10px;
  width: 30px;
  height: 30px;
  transform: rotate(180deg);
  transition: all 0.4s ease-in-out;
`;
export const Accordion = () => {
  const data = [
    {
      name: 'Category List',
      components: <BudgetCategoryList />
    },
    {
      name: 'Add Parent Budget Category',
      components: <AddBudgetCategory />
    },
    {
      name: 'Add Budget Category',
      components: <AddBudgetCategory />
    }
  ];

  const [selected, setSelected]: any = useState(0);
  const toggle = (index: number) => {
    if (selected == index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <Wrapper>
      {data.map((item, index) => (
        <div key={item.name}>
          <NameWrapper onClick={() => toggle(index)}>
            <Paragraph>{item.name}</Paragraph>

            <ActiveIcon
              css={
                selected == index
                  ? `
                  transform: rotate(0deg);
                  transition: all 0.4s ease-in-out;
                `
                  : null
              }
              src={expandLess}
            />
          </NameWrapper>
          <div>{selected == index ? item.components : null}</div>
        </div>
      ))}
    </Wrapper>
  );
};
