import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Accordion } from '../../components/Molecules/Accordion/Accordion';
import { BudgetCategoryList } from '../../components/Molecules/BudgetCategoryList/BudgetCategoryList';
import { AddBudgetParentCategory } from '../../components/Molecules/AddBudgetParentCategory/AddBudgetParentCategory';
import { AddCategory } from '../../components/Molecules/AddBudgetCategory/AddCategory';
import { ProviderIcon } from '../../components/Context/SelectProviderIcon';

export const CategoryPage = () => {
  const { t, i18n } = useTranslation();
  const data = [
    // {
    //   name: 'Category List',
    //   components: <BudgetCategoryList />
    // },
    {
      name: 'Add Parent Budget Category',
      components: <AddBudgetParentCategory />
    },
    {
      name: 'Add Budget Category',
      components: <AddCategory />
    }
  ];
  return (
    <>
      <ProviderIcon>
        <Accordion data={data} />
      </ProviderIcon>
    </>
  );
};
