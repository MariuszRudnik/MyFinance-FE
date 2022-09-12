import React from 'react';
import { Sidebar } from '../components/Organism/Sidebar/Sidebar';
import { theme } from '../theme/mainTheme';
import styled from 'styled-components';
import Input from '../components/Atoms/Input/Input';
import Heading from '../components/Atoms/Heading/Heading';

type TypeProps = {
  children: React.ReactNode;
  activeColor?: string;
};

export const UserPageTemplates = ({ children, activeColor }: TypeProps) => {
  return (
    <>
      <Sidebar activeColor={activeColor} />
      {children}s
    </>
  );
};
