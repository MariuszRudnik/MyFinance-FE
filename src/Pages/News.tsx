import React from 'react';
import { UserPageTemplates } from '../templates/UserPageTemplates';
import { theme } from '../theme/mainTheme';

export const News = () => {
  return (
    <UserPageTemplates activeColor={theme.secondary}>
      <h1>News</h1>
    </UserPageTemplates>
  );
};
