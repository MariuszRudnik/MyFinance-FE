import React from 'react';
import { UserPageTemplates } from '../templates/UserPageTemplates';
import { theme } from '../theme/mainTheme';

export const MainPage = () => {
  return (
    <UserPageTemplates activeColor={theme.primary}>
      <h1>Hellow</h1>
    </UserPageTemplates>
  );
};
