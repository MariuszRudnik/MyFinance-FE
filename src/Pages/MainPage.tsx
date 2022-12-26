import React from 'react';
import { UserPageTemplates } from '../templates/UserPageTemplates';
import { theme } from '../theme/mainTheme';
import { useTranslation } from 'react-i18next';

export const MainPage = () => {
  const { t, i18n } = useTranslation();

  return <h1>{t('welcome_to_react')}</h1>;
};
