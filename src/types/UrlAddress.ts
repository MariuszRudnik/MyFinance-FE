const Url = 'http://localhost:3001/';

export const GETUserHost = Url + 'user';
export const POSTListOfWallets = Url + 'list-of-wallets/';
export const Transaction = Url + 'transactions/';
export const POSTExpenseCategory = Url + 'expensecategory';
export const GETTransactionExpenses = Url + 'transactions/expenses/';
export const GETCategory = Url + 'expensecategory/';

export const UrlAddress = {
  Login: Url + 'auth/login',
  Register: Url + 'user/register',
  Logout: Url + 'auth/logout'
};
