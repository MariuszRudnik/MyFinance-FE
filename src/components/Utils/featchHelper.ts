import { UrlAddress } from '../../types/UrlAddress';

export const getFetch2: any = async (url: string) => {
  const response = await fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' }
  });
  const data = await response.json();
  return data;
};

export const getParentCategory = async (key: any) => {
  const { id } = key.queryKey[1];
  const res = await fetch(UrlAddress.GetParentCategory + id, {
    method: 'GET',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' }
  });
  if (res.status !== 200) throw new Error('Something went wrong');
  return await res.json();
};

export const getCategory = async (key: any) => {
  const { id } = key.queryKey[1];
  const res = await fetch(UrlAddress.GetCategory + id, {
    method: 'GET',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' }
  });
  if (res.status !== 200) throw new Error('Something went wrong');
  return await res.json();
};

export const getOperations = async (key: any) => {
  const { id } = key.queryKey[1];
  const res = await fetch(UrlAddress.Transaction + id, {
    method: 'GET',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' }
  });
  if (res.status !== 200) throw new Error('Something went wrong');
  return await res.json();
};
