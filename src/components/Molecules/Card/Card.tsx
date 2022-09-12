import React from 'react';
import styled, { css } from 'styled-components';
import Paragraph from '../../Atoms/Paragraph/Paragraph';
import Heading from '../../Atoms/Heading/Heading';
import Button from '../../Atoms/Button/Button';

type InnerWrapperProps = {
  activeColor?: string;
  flex?: boolean;
};

const StyledWrapper = styled.div`
  min-height: 388px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;
const InnerWrapper = styled.div<InnerWrapperProps>`
  padding: 17px 30px 10px;
  background-color: ${({ theme, activeColor }) => (activeColor ? theme[activeColor] : 'white')};
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;
const DateInfo = styled(Paragraph)`
  margin: 0 0 10px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;
const StyledHeading = styled(Heading)`
  margin: 10px 0 0;
`;

export const Card = ({ activeColor }: InnerWrapperProps) => {
  return (
    <StyledWrapper>
      <InnerWrapper activeColor={activeColor}>
        <StyledHeading>Hello Mariusz</StyledHeading>
        <DateInfo>3 days</DateInfo>
      </InnerWrapper>
      <InnerWrapper>
        <Paragraph>Lorem Lorem Lorem Lorem LoremLorem LoremLorem LoremLorem Lorem</Paragraph>
        <Button secondary>Remove</Button>
      </InnerWrapper>
    </StyledWrapper>
  );
};
