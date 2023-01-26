import React from 'react';

import { Content } from '../../components/Molecules/Content/Content';
import { useTranslation } from 'react-i18next';
import { AddTransaction } from '../../components/Molecules/AddTransation/AddTransaction';

export const AddTransactionPage = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Content heading={'Add transaction'} widthContent={'90%'}>
        <AddTransaction />
      </Content>
    </>
  );
};
