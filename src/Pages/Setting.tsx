import React from 'react';
import { UserPageTemplates } from '../templates/UserPageTemplates';
import { theme } from '../theme/mainTheme';
import { Login } from '../components/Organism/Login/Login';
import { UrtTypes } from '../types/UrtTypes';

export const Setting = () => {
  console.log(UrtTypes.News);
  return (
    <UserPageTemplates activeColor={theme.tertiary}>
      <Login />
    </UserPageTemplates>
  );
};
