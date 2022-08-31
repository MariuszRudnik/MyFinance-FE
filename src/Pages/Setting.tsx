import React from 'react';
import { UserPageTemplates } from '../templates/UserPageTemplates';
import { theme } from '../theme/mainTheme';

export const Setting = () => {
  return (
    <UserPageTemplates activeColor={theme.tertiary}>
      <h1>Setting</h1>
    </UserPageTemplates>
  );
};
