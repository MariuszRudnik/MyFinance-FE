import React from 'react';
import { UserPageTemplates } from '../templates/UserPageTemplates';
import { theme } from '../theme/mainTheme';
import { Login } from '../components/Organism/Login/Login';
import { UrlTypes } from '../types/UrlTypes';

export const Setting = () => {
  console.log(UrlTypes.News);
  return (
    <UserPageTemplates activeColor={theme.tertiary}>
      <Login />
    </UserPageTemplates>
  );
};
