const createActionName = (name: string) => `app/wallet/${name}`;

//Action name
const ADD_WALLET = createActionName('ADD_WALLET');

//Action Creators
export const AddWallet = (payload: any) => ({ type: ADD_WALLET, payload });

const reducer = function (statePart: any = {}, action: any = {}) {
  switch (action.type) {
    case ADD_WALLET:
      return [statePart, action.payload];

    default:
      return statePart;
  }
};
export default reducer;
