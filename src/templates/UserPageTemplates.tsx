import React from 'react';
import { Sidebar } from '../components/Organism/Sliderbar/Sidebar';
import { Navbar } from '../components/Molecules/Navbar/Navbar';
import styled from 'styled-components';

type TypeProps = {
  children: React.ReactNode;
  activeColor?: string;
};
const MainWrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
`;
const StyleBodyWrapper = styled.div`
  display: flex;
`;

export const UserPageTemplates = ({ children, activeColor }: TypeProps) => {
  return (
    <MainWrapper>
      <Navbar />
      <StyleBodyWrapper>
        <Sidebar />
        {children}
      </StyleBodyWrapper>
    </MainWrapper>
  );
};
