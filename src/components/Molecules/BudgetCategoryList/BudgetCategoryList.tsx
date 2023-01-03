import { groupBy } from 'lodash';
import { useQuery } from 'react-query';
import { useState } from 'react';

type categoryType = {
  id: string;
  categoryName: string;
  parentCategory?: object;
};

const getCategory = async () => {
  const response = await fetch('http://localhost:3002/api/wallet/addCategory/0', {
    method: 'GET',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' }
  });
  const data = await response.json();
  return data;
};
const getParentCategory = async () => {
  const response = await fetch('http://localhost:3002/api/wallet/addParentCategory/0', {
    method: 'GET',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' }
  });
  const data = await response.json();
  return data;
};

export const BudgetCategoryList = () => {
  const { data: category } = useQuery('category', getCategory, { refetchOnWindowFocus: false });
  const { data: parentCategory } = useQuery('parentCategory', getParentCategory, {
    refetchOnWindowFocus: false
  });
  const budgetCategoriesByParent: any = groupBy(
    category,
    (item) => parentCategory.find((category: any) => category.id == item.parentCategory.id).name
  );

  const listItems = Object.entries(budgetCategoriesByParent).map(([parentName, category]) => {
    const item: any = category;
    return (
      <div key={parentName}>
        <h1 key={parentName}>{parentName}</h1>
        {item.map((item: categoryType) => (
          <p key={item.id}>{item.categoryName}</p>
        ))}
      </div>
    );
  });

  return <>{listItems}</>;
};
