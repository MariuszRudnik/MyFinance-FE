import React from 'react';
import { UserPageTemplates } from '../templates/UserPageTemplates';
import { theme } from '../theme/mainTheme';
import { Menu } from '../components/Organism/Menu/Menu';

export const MainPage = () => {
  return (
    <UserPageTemplates activeColor={theme.primary}>
      <h1>Hellow</h1>
    </UserPageTemplates>
  );
};
