import React from 'react';
import { Accordion } from '../../components/Molecules/Accordion/Accordion';
import { AddBudgetParentCategory } from '../../components/Molecules/AddBudgetParentCategory/AddBudgetParentCategory';
import { AddCategory } from '../../components/Molecules/AddBudgetCategory/AddCategory';
import { ProviderIcon } from '../../components/Context/SelectProviderIcon';

export const CategoryPage = () => {
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
