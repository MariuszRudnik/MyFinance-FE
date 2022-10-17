import { UrlAddress } from '../../types/UrlAddress';
const createActionName = (name: string) => `app/access/${name}`;

//Action name
const LOGIN = createActionName('LOGIN');
const USER_DATA = createActionName('USER_DATA');

//Action Creators
export const LoginAccess = (payload: any) => ({ type: LOGIN, payload });
export const UserAccess = (payload: any) => ({ type: USER_DATA, payload });

export const fetchBooks = (login: any) => {
  return async (dispatch: any) => {
    try {
      //dispatch(startRequest())
      const res = await fetch(UrlAddress.Login, {
        method: 'POST',
        body: JSON.stringify(login),
        headers: { 'Content-Type': 'application/json' }
      });
      if (res.status !== 201) throw new Error('Something went wrong');
      const data = await res.json();
      console.log(data);
      dispatch(LoginAccess(true));
      dispatch(UserAccess(data));
      //dispatch(finishRequestWithSuccess())
    } catch (err) {
      console.error(err);
      //dispatch(finishRequestWithError())
    }
  };
};

const reducer = function (statePart: any = {}, action: any = {}) {
  switch (action.type) {
    case LOGIN:
      return {
        ...statePart,
        login: action.payload
      };
    case USER_DATA:
      return {
        ...statePart,
        data: action.payload
      };

    default:
      return statePart;
  }
};
export default reducer;
