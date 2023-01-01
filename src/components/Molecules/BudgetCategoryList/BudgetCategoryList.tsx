import { groupBy } from 'lodash';
import { useQueries, useQueryClient, useQuery } from 'react-query';
import { UrlAddress } from '../../../types/UrlAddress';

const getCategory = async () => {
  const response = await fetch('http://localhost:3002/api/wallet/addCategory/0', {
    method: 'GET',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' }
  });
  const data = await response.json();
  return data;
};
export const BudgetCategoryList = () => {
  const queryClient = useQueryClient();
  const { data } = useQuery('category', getCategory);
  console.log(data);
  return <p>ss</p>;
};
