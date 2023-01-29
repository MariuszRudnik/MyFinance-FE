import React from 'react';

import { Content } from '../../components/Molecules/Content/Content';
import { useTranslation } from 'react-i18next';
import { AddTransaction } from '../../components/Molecules/AddTransation/AddTransaction';
import { useQuery } from 'react-query';
import { getCategory, getParentCategory } from '../../components/Utils/featchHelper';
import { useParams } from 'react-router-dom';

export const AddTransactionPage = () => {
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
        <Content heading={'Add transaction'} widthContent={'90%'}>
          <React.Suspense>
            {!loadingCategory ? (
              <AddTransaction
                parentCategory={dataParentCategory}
                category={dataCategory}
                parentCategoryLoading={loadingParentCategory}
                categoryLoading={loadingCategory}
              />
            ) : null}
          </React.Suspense>
        </Content>
      </>
    );
  }
};
