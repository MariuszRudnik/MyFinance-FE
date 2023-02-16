import axios from 'axios';
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
  const pageNumber = key.queryKey[2];

  const { id } = key.queryKey[1];

  const res = await fetch(`${UrlAddress.Transaction}${id}/${pageNumber}`, {
    method: 'GET',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' }
  });
  if (res.status !== 200) throw new Error('Something went wrong');
  return await res.json();
};

export const getOperationsMonth = async (key: any) => {
  const id = key.queryKey[1];
  const month = key.queryKey[2];
  const year = key.queryKey[3];

  const res = await fetch(`${process.env.REACT_APP_TRANSACTION_MONTH}${id}/${month}/${year}`, {
    method: 'GET',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' }
  });
  if (res.status !== 200) throw new Error('Something went wrong');
  return await res.json();
};

export const getSumOperationsMonth = async (key: any) => {
  const id = key.queryKey[1];
  const month = key.queryKey[2];
  const year = key.queryKey[3];
  let fullMonth = '';
  if (month <= 9) {
    fullMonth = '0' + month;
  } else {
    fullMonth = month;
  }

  const { data } = await axios({
    method: 'get',
    url: `${process.env.REACT_APP_SUM_TRANSACTION_MONTH}${id}/${fullMonth}/${year}`,
    withCredentials: true,
    headers: { 'Content-Type': 'application/json' }
  });

  return data;
};
