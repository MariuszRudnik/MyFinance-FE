import React from 'react';
import { theme } from '../theme/mainTheme';
import { UserPageTemplates } from '../templates/UserPageTemplates';
import AddWalletComponents from '../components/Organism/AddWallet/AddwalletContainer';

export const AddWallet = () => {
  return (
    <UserPageTemplates activeColor={theme.secondary}>
      <AddWalletComponents />
    </UserPageTemplates>
  );
};
