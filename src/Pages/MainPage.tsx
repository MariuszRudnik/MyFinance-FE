import React from 'react';
import { UserPageTemplates } from '../templates/UserPageTemplates';
import { theme } from '../theme/mainTheme';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

export const MainPage = () => {
  const { t, i18n } = useTranslation();
  const notify = () =>
    toast.success('🦄 Wow so easy!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light'
    });

  return (
    <>
      <h1>{t('welcome_to_react')}</h1>
      <button onClick={notify}>clikc</button>
    </>
  );
};
