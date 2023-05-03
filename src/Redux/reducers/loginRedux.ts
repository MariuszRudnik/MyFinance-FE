import { UrlAddress } from '../../types/UrlAddress';
import { useQuery } from '@tanstack/react-query';
import { fetchDownloadWallet } from './walletRedux';

const createActionName = (name: string) => `app/access/${name}`;

//Action name
const LOGIN = createActionName('LOGIN');
const USER_DATA = createActionName('USER_DATA');
const START_REQUEST = createActionName('START_REQUEST');
const FINISH_REQUEST_WITH_ERROR = createActionName('FINISH_REQUEST_WITH_ERROR');
const FINISH_REQUEST_WITH_SUCCESS = createActionName('FINISH_REQUEST_WITH_SUCCESS');

//Action Creators
export const LoginAccess = (payload: boolean) => ({ type: LOGIN, payload });
export const UserAccess = (payload: any) => ({ type: USER_DATA, payload });
export const startRequest = () => ({ type: START_REQUEST });
export const finishRequestWithError = () => ({ type: FINISH_REQUEST_WITH_ERROR });
export const finishRequestWithSuccess = () => ({ type: FINISH_REQUEST_WITH_SUCCESS });

export const fetchLogin = (login: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(startRequest());
      const res = await fetch('https://my-finances-be-mariuszrudnik.vercel.app/api/login', {
        mode: 'no-cors',
        method: 'POST',
        body: JSON.stringify(login),
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' }
      });
      // if (res.status !== 201) throw new Error('Something went wrong');
      const data = await res.json();
      await dispatch(finishRequestWithSuccess());

      await dispatch(UserAccess(data));

      await dispatch(LoginAccess(true));
    } catch (err) {
      console.error(err);
      dispatch(finishRequestWithError());
    }
  };
};
export const fetchLogout = () => {
  return async (dispatch: any) => {
    try {
      dispatch(startRequest());
      const res = await fetch(UrlAddress.Logout, {
        mode: 'no-cors',
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' }
      });
      if (res.status !== 201) throw new Error('Something went wrong');
      dispatch(finishRequestWithSuccess());
      dispatch(LoginAccess(false));
      dispatch(UserAccess(null));
    } catch (err) {
      dispatch(LoginAccess(false));
      dispatch(UserAccess(null));
    }
  };
};
interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}
export const fetchRegister = (data: FormValues) => {
  return async (dispatch: any) => {
    try {
      dispatch(startRequest());
      const res = await fetch(UrlAddress.Register, {
        mode: 'no-cors',
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      });
      //if (res.status !== 201) throw new Error('Something went wrong');
      await dispatch(finishRequestWithSuccess());
      await dispatch(UserAccess(data));
      await dispatch(LoginAccess(true));
    } catch (err) {
      dispatch(LoginAccess(false));
      dispatch(UserAccess(null));
    }
  };
};

const reducer = function (statePart: any = {}, action: any = {}) {
  switch (action.type) {
    case LOGIN:
      return { ...statePart, login: action.payload };
    case USER_DATA:
      return { ...statePart, data: action.payload };
    case START_REQUEST:
      return { ...statePart, request: { pending: true, error: false, success: false } };
    case FINISH_REQUEST_WITH_SUCCESS:
      return { ...statePart, request: { pending: false, error: false, success: true } };
    case FINISH_REQUEST_WITH_ERROR:
      return { ...statePart, request: { pending: false, error: true, success: false } };

    default:
      return statePart;
  }
};
export default reducer;
