import { groupBy } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDownloadCategory } from '../../../Redux/reducers/walletRedux';
import { useTranslation } from 'react-i18next';

type categoryType = {
  id: string;
  categoryName: string;
  parentCategory?: object;
};

export const BudgetCategoryList = () => {
  const { t, i18n } = useTranslation();
  const params = useParams();
  const userId = params.id;
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(fetchDownloadCategory(userId));
  }, [userId]);
  const category = useSelector((state: any) => state.wallet.category);
  const parentCategory = useSelector((state: any) => state.wallet.parentCategory);
  let listItems = null;

  const addCategory = () => {
    const budgetCategoriesByParent: any = groupBy(
      category,
      (item) => parentCategory.find((category: any) => category.id == item.parentCategory.id).name
    );
    listItems = Object.entries(budgetCategoriesByParent).map(([parentName, category]) => {
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
  };
  if (parentCategory == undefined) {
    return <h1>Loading...</h1>;
  } else if (parentCategory.length == 0) {
    return <h1>{t("You don't have any categories")}</h1>;
  } else {
    addCategory();
  }

  return <>{listItems}</>;
};
