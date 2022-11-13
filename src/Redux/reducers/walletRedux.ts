import { UrlAddress } from '../../types/UrlAddress';

const createActionName = (name: string) => `app/wallet/${name}`;

//Action name
const ADD_WALLET = createActionName('ADD_WALLET');

//Action Creators
export const AddWallet = (payload: any) => ({ type: ADD_WALLET, payload });

export const fetchAddWallet = (login: any) => {
  return async (dispatch: any) => {
    try {
      const res = await fetch(UrlAddress.AddWallet, {
        method: 'POST',
        body: JSON.stringify(login),
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' }
      });
      if (res.status !== 201) throw new Error('Something went wrong');
      const dataJson = await res.json();
      console.log(login);
      console.log(AddWallet(login));
      dispatch(AddWallet(login));
    } catch (err) {
      console.error(err);
    }
  };
};

const reducer = function (statePart: any = [], action: any = {}) {
  switch (action.type) {
    case ADD_WALLET:
      return [...statePart, action.payload];

    default:
      return statePart;
  }
};
export default reducer;
