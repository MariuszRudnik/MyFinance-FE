import React from 'react';
import { UserPageTemplates } from '../templates/UserPageTemplates';
import { theme } from '../theme/mainTheme';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

export const MainPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <h1>{t('alpha version page')}</h1>
    </>
  );
};
