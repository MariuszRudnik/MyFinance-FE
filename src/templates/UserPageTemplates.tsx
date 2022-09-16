import React from 'react';
import { SidebarV2 } from '../components/Organism/SliderbarV2/SidebarV2';

type TypeProps = {
  children: React.ReactNode;
  activeColor?: string;
};

export const UserPageTemplates = ({ children, activeColor }: TypeProps) => {
  return (
    <>
      <SidebarV2></SidebarV2>
      {children}
    </>
  );
};
