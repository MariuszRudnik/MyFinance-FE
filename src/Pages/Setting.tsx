import React from 'react';
import { UserPageTemplates } from '../templates/UserPageTemplates';
import { theme } from '../theme/mainTheme';
import { Login } from '../components/Organism/Login/Login';

export const Setting = () => {
  return (
    <UserPageTemplates activeColor={theme.tertiary}>
      <Login />
    </UserPageTemplates>
  );
};
