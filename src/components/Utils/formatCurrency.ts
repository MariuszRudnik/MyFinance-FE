export const formatCurrency = (value: number) => {
  const number = Number(value);
  return new Intl.NumberFormat('pl', { style: 'currency', currency: 'PLN' }).format(number);
};
