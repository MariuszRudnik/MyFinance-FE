import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../theme/mainTheme';
import Heading from '../../Atoms/Heading/Heading';

type Style = {
  widthStyle?: string;
};

const StyleContentWrapper = styled.div<Style>`
  background-color: ${theme.secondary};
  width: 100%;
  margin: 0 50px 0 0;
  border-radius: 10px;
  overflow: hidden;
  max-width: ${({ widthStyle }) => (widthStyle ? widthStyle : '800px')};
`;
const TitleWrapper = styled.div`
  border-bottom: 2px solid ${theme.secondary};
  padding: 0 30px;
  width: 100%;
`;
type Props = {
  heading: string;
  children: JSX.Element;
  widthContent?: string;
};

export const Content = ({ heading, widthContent, children }: Props) => {
  return (
    <>
      <StyleContentWrapper widthStyle={widthContent}>
        <TitleWrapper>
          <Heading color={theme.textColor} big={'18px'}>
            {heading}
          </Heading>
        </TitleWrapper>
        {children}
      </StyleContentWrapper>
    </>
  );
};
