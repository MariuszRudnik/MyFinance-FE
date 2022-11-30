import React from 'react';
import { UserPageTemplates } from '../templates/UserPageTemplates';
import { theme } from '../theme/mainTheme';
import { Content } from '../components/Molecules/Content/Content';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Button from '../components/Atoms/Button/Button';

const WrapperContent = styled.div`
  padding: 15px;
`;

export const Setting = () => {
  const { t, i18n } = useTranslation();
  return (
    <UserPageTemplates activeColor={theme.tertiary}>
      <Content heading={t('Settings')} widthContent={'90%'}>
        <WrapperContent>
          {t('Application language')} <button onClick={() => i18n.changeLanguage('en')}>EN</button>{' '}
          <button onClick={() => i18n.changeLanguage('pl')}>PL</button>
        </WrapperContent>
      </Content>
    </UserPageTemplates>
  );
};
