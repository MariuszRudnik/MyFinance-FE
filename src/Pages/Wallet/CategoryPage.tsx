import React, { useState } from 'react';
import {
  ButtonWrapper,
  FormWrapper,
  StyleAddWallet,
  StylForm,
  TitleWrapper
} from '../../components/Organism/AddWallet/style/StyleAddWallet.style';
import Heading from '../../components/Atoms/Heading/Heading';
import { theme } from '../../theme/mainTheme';
import { useTranslation } from 'react-i18next';
import { BudgetCategoryList } from '../../components/Molecules/BudgetCategoryList/BudgetCategoryList';
import { AddBudgetCategory } from '../../components/Molecules/AddBudgetCategory/AddBudgetCategory';
import { Accordion } from '../../components/Molecules/Accordion/Accordion';

export const CategoryPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      {/* <StyleAddWallet> */}
      {/*   <TitleWrapper> */}
      {/*     <Heading color={theme.gray400}>{t('Budget Category List')}</Heading> */}
      {/*   </TitleWrapper> */}
      {/* </StyleAddWallet> */}

      <Accordion />
    </>
  );
};
