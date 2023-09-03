import React from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { getCategory, getParentCategory } from '../../Utils/featchHelper';
import { useParams } from 'react-router-dom';
import { AddForm } from '../AddFrom/AddForm';

export const AddTransaction = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const { data: dataParentCategory, isLoading: loadingParentCategory } = useQuery(
    ['parentCategory', { id }],
    getParentCategory
  );
  const { data: dataCategory, isLoading: loadingCategory } = useQuery(
    ['category', { id }],
    getCategory
  );

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
