import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Button from '../../Atoms/Button/Button';
import styled from 'styled-components/macro';
import Paragraph from '../../Atoms/Paragraph/Paragraph';
import { theme } from '../../../theme/mainTheme';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import { deleteTransaction, getCategory, getParentCategory } from '../../Utils/featchHelper';
import SelectForm from '../SelecteInlut/SelectForm';

interface ParentCategoryData {
  icon: string;
  id: string;
  name: string;
  plannedBudget: string;
}
interface Transaction {
  id: string;
  transaction: string;
}
interface Values {
  category: string;
  date: string;
  description: string;
  name: string;
  operations: string;
  parentCategory: string;
  price: number;
}
const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const NewButton = styled(Button)`
  background-color: ${theme.error};
  &:hover {
    background-color: ${theme.error};
    border: 3px solid ${theme.approve};
  }
`;

export const EditTransaction = ({ data }: any) => {
  const { id, idTransaction }: any = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { data: dataParentCategory, isLoading: loadingParentCategory }: any = useQuery(
    ['parentCategory', { id }],
    getParentCategory
  );
  const { data: categories, isLoading: loadingCategory }: any = useQuery(
    ['category', { id }],
    getCategory
  );

  const { mutate, isLoading, isError, isSuccess } = useMutation(deleteTransaction, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['operations', { id }] });
      queryClient.invalidateQueries({ queryKey: 'sumTransaction' });
    }
  });
  const handleDelete = (transaction: Transaction) => {
    mutate([transaction.id, transaction.transaction]);
    navigate('../');
  };

  return (
    <WrapperForm>
      <div>
        <Paragraph>Edit transactions :</Paragraph>
        {!loadingCategory && !loadingParentCategory ? (
          <SelectForm
            categories={categories}
            parentCategories={dataParentCategory}
            data={data}></SelectForm>
        ) : null}
      </div>
      <div>
        <Paragraph>Click button if you want delete transaction.</Paragraph>
        <NewButton
          secondary={true}
          onClick={() => handleDelete({ id, transaction: idTransaction })}>
          Delete
        </NewButton>
      </div>
    </WrapperForm>
  );
};
