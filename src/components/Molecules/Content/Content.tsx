import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { theme } from '../../../theme/mainTheme';
import Heading from '../../Atoms/Heading/Heading';
import { ChildProcess } from 'child_process';

const StyleContentWrapper = styled.div`
  background-color: ${theme.white};
  width: 100%;
  margin: 0 50px 0 0;
  border-radius: 10px;
  overflow: hidden;
  max-width: 800px;
`;
const TitleWrapper = styled.div`
  border-bottom: 2px solid ${theme.white200};
  padding: 0 30px;
  width: 100%;
`;
type Props = {
  heading: string;
  children: JSX.Element;
};

export const Content = ({ heading, children }: Props) => {
  return (
    <>
      <StyleContentWrapper>
        <TitleWrapper>
          <Heading color={theme.gray400} big={'18px'}>
            {heading}
          </Heading>
        </TitleWrapper>
        {children}
      </StyleContentWrapper>
    </>
  );
};
