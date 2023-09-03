import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../Atoms/Button/Button';
import styled from 'styled-components/macro';
import Paragraph from '../../Atoms/Paragraph/Paragraph';
import { theme } from '../../../theme/mainTheme';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteTransaction, getCategory, getParentCategory } from '../../Utils/featchHelper';
import SelectForm from '../SelecteInlut/SelectForm';

interface Transaction {
  id: string;
  transaction: string;
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

  const { mutate } = useMutation(deleteTransaction, {
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
