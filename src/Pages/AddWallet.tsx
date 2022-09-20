import React from 'react';
import { theme } from '../theme/mainTheme';
import Input from '../components/Atoms/Input/Input';
import Heading from '../components/Atoms/Heading/Heading';
import { Card } from '../components/Molecules/Card/Card';
import { UserPageTemplates } from '../templates/UserPageTemplates';
import { AddWalletComponents } from '../components/Organism/AddWallet/AddWalletComponents';

export const AddWallet = () => {
  return (
    <>
      <UserPageTemplates activeColor={theme.secondary}>
        <AddWalletComponents />
      </UserPageTemplates>
    </>
  );
};