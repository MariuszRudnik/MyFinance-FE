const Url = 'http://localhost:3002/';

export const GETUserHost = Url + 'user';
export const POSTListOfWallets = Url + 'list-of-wallets/';
export const Transaction = Url + 'transactions/';
export const POSTExpenseCategory = Url + 'expensecategory';
export const GETTransactionExpenses = Url + 'transactions/expenses/';
export const GETCategory = Url + 'expensecategory/';

export const UrlAddress = {
  Login: Url + 'api/login',
  User: Url + 'api/user',
  Register: Url + 'api/register',
  Logout: Url + 'api/logout',
  AddWallet: Url + 'api/wallet'
};
