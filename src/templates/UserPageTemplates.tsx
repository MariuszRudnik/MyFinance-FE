import React from 'react';
import { Sidebar } from '../components/Organism/Sidebar/Sidebar';
import { theme } from '../theme/mainTheme';

type TypeProps = {
  children: React.ReactNode;
  activeColor?: string;
};

export const UserPageTemplates = ({ children, activeColor }: TypeProps) => {
  return (
    <>
      <Sidebar activeColor={activeColor} />
      {children}
    </>
  );
};
