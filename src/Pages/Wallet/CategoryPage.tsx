import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Accordion } from '../../components/Molecules/Accordion/Accordion';
import { BudgetCategoryList } from '../../components/Molecules/BudgetCategoryList/BudgetCategoryList';
import { AddBudgetCategory } from '../../components/Molecules/AddBudgetCategory/AddBudgetCategory';

export const CategoryPage = () => {
  const { t, i18n } = useTranslation();
  const data = [
    {
      name: 'Category List',
      components: <BudgetCategoryList />
    },
    {
      name: 'Add Parent Budget Category',
      components: <AddBudgetCategory />
    },
    {
      name: 'Add Budget Category',
      components: <AddBudgetCategory />
    }
  ];
  return (
    <>
      <Accordion data={data} />
    </>
  );
};
