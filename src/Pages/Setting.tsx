import React from 'react';

import { Content } from '../components/Molecules/Content/Content';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const WrapperContent = styled.div`
  padding: 15px;
`;

export const Setting = () => {
  const { t, i18n } = useTranslation();
  return (
    <Content heading={t('Settings')} widthContent={'90%'}>
      <WrapperContent>
        {t('Application language')} <button onClick={() => i18n.changeLanguage('en')}>EN</button>{' '}
        <button onClick={() => i18n.changeLanguage('pl')}>PL</button>
      </WrapperContent>
    </Content>
  );
};
