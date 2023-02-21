import React from 'react';

import { Content } from '../Content/Content';
import { useTranslation } from 'react-i18next';
import { AddTransactionCategory } from './AddTransactionComponent';
import { useQuery } from 'react-query';
import { getCategory, getParentCategory } from '../../Utils/featchHelper';
import { useParams } from 'react-router-dom';
import { AddForm } from '../AddFrom/AddForm';
import { RaceForm } from '../AddFrom/Clock';

export const AddTransaction = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const {
    data: dataParentCategory,
    error: errorParentCategory,
    isLoading: loadingParentCategory
  } = useQuery(['parentCategory', { id }], getParentCategory);
  const {
    data: dataCategory,
    error: errorCategory,
    isLoading: loadingCategory
  } = useQuery(['category', { id }], getCategory);

  if (
    dataCategory == undefined ||
    dataParentCategory == undefined ||
    dataCategory.length <= 0 ||
    dataParentCategory.length <= 0
  ) {
    return <h1>{t('You need at least one Category and parent Category.')}</h1>;
  } else {
    return (
      <>
        <React.Suspense>
          {!loadingParentCategory && !loadingCategory ? (
            <AddForm categories={dataCategory} parentCategories={dataParentCategory} />
          ) : null}
        </React.Suspense>
      </>
    );
  }
};
