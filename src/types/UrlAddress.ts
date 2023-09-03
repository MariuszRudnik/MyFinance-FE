// const Url = 'https://my-finances-be-mariuszrudnik.vercel.app/';
const Url = process.env.REACT_APP_GET_URL;

export const UrlAddress = {
  Login: Url + 'api/login',
  User: Url + 'api/user',
  Register: Url + 'api/register',
  Logout: Url + 'api/logout',
  AddWallet: Url + 'api/wallet',
  GetCategory: Url + 'api/wallet/Category/',
  GetParentCategory: Url + 'api/wallet/parentCategory/',
  Transaction: Url + 'api/transactions/'
};
