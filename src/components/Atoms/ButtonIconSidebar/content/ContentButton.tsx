import React from 'react';
import styled from 'styled-components';
import expandLess from '../../../Assets/icons/expand-less.svg';

type Props = {
  title: string | any;
  icon?: any;
};

const ContentButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px 0 15px;
`;
const Image = styled.img`
  width: 30px;
  height: 30px;
`;
const ActiveIcon = styled.img`
  width: 30px;
  height: 30px;
  transform: rotate(180deg);
`;
const StyledParagraph = styled.div`
  display: flex;
  width: 100%;
  padding-left: 20px;
  justify-content: start;
  align-items: center;
  font-family: 'Roboto-Regular', 'Roboto-Bold', 'Roboto-Italic', 'Roboto-Light', sans-serif;
`;

export const ContentButton = ({ title, icon }: Props) => {
  return (
    <ContentButtonWrapper>
      <Image src={icon} alt="" />
      <StyledParagraph>{title}</StyledParagraph>
      <ActiveIcon src={expandLess} alt="" />
    </ContentButtonWrapper>
  );
};
