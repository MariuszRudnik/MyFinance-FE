import { UrlAddress } from '../../types/UrlAddress';

const createActionName = (name: string) => `app/wallet/${name}`;

//Action name
const ADD_WALLET = createActionName('ADD_WALLET');
const FETCH_WALLET = createActionName('FETCH_WALLET');
const ACTIVE_WALLET = createActionName('ACTIVE_WALLET');

//Action Creators
export const AddWallet = (payload: any) => ({ type: ADD_WALLET, payload });
export const fetchWallet = (payload: any) => ({ type: FETCH_WALLET, payload });

export const fetchDownloadWallet = () => {
  return async (dispatch: any) => {
    try {
      const res = await fetch(UrlAddress.AddWallet, {
        method: 'GET',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' }
      });
      if (res.status !== 200) throw new Error('Something went wrong');
      const dataJson = await res.json();
      const wallet = dataJson.map((item: any) => ({ ...item, active: false }));
      await dispatch(fetchWallet(wallet));
    } catch (err) {
      console.error(err);
    }
  };
};
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
      dispatch(AddWallet(login));
    } catch (err) {
      console.error(err);
    }
  };
};

const reducer = function (statePart: any = {}, action: any = {}) {
  switch (action.type) {
    case ADD_WALLET:
      return [...statePart, action.payload];
    case FETCH_WALLET:
      return { walletList: action.payload };
    case ACTIVE_WALLET:
      return { walletList: action.payload };
    default:
      return statePart;
  }
};
export default reducer;
