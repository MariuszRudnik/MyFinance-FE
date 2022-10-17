import React from 'react';
import ButtonIcon from '../../Atoms/ButtonIcon/ButtonIcon';
import twiter from '../../Assets/icons/twitter.svg';
import { theme } from '../../../theme/mainTheme';
import styled from 'styled-components';
import Paragraph from '../../Atoms/Paragraph/Paragraph';

const OperationWrapper = styled.div`
  display: flex;
  width: 450px;
  height: 120px;
  justify-content: space-between;
`;
const OperationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;
const DescriptionStyle = styled.div`
  margin: 0 20px;
  display: flex;
  justify-content: flex-start;
  width: 70%;
`;

export const EventsWallet = () => {
  return (
    <OperationsWrapper>
      <OperationWrapper>
        <ButtonIcon color={theme.pink100} icon={twiter}></ButtonIcon>
        <DescriptionStyle>
          <Paragraph>Wydatek</Paragraph>
        </DescriptionStyle>
        <Paragraph>50zł</Paragraph>
      </OperationWrapper>
      <OperationWrapper>
        <ButtonIcon color={theme.green100} icon={twiter}></ButtonIcon>
        <DescriptionStyle>
          <Paragraph>Wydatek</Paragraph>
        </DescriptionStyle>
        <Paragraph>50zł</Paragraph>
      </OperationWrapper>
      <OperationWrapper>
        <ButtonIcon color={theme.pink100} icon={twiter}></ButtonIcon>
        <DescriptionStyle>
          <Paragraph>Wydatek</Paragraph>
        </DescriptionStyle>
        <Paragraph>50zł</Paragraph>
      </OperationWrapper>
    </OperationsWrapper>
  );
};
