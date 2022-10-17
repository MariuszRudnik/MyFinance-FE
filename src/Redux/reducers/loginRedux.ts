import { UrlAddress } from '../../types/UrlAddress';
const createActionName = (name: string) => `app/access/${name}`;

//Action name
const LOGIN = createActionName('LOGIN');
const USER_DATA = createActionName('USER_DATA');
const START_REQUEST = createActionName('START_REQUEST');
const FINISH_REQUEST_WITH_ERROR = createActionName('FINISH_REQUEST_WITH_ERROR');
const FINISH_REQUEST_WITH_SUCCESS = createActionName('FINISH_REQUEST_WITH_SUCCESS');

//Action Creators
export const LoginAccess = (payload: any) => ({ type: LOGIN, payload });
export const UserAccess = (payload: any) => ({ type: USER_DATA, payload });
export const startRequest = () => ({ type: START_REQUEST });
export const finishRequestWithError = () => ({ type: FINISH_REQUEST_WITH_ERROR });
export const finishRequestWithSuccess = () => ({ type: FINISH_REQUEST_WITH_SUCCESS });

export const fetchBooks = (login: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(startRequest());
      const res = await fetch(UrlAddress.Login, {
        method: 'POST',
        body: JSON.stringify(login),
        headers: { 'Content-Type': 'application/json' }
      });
      if (res.status !== 201) throw new Error('Something went wrong');
      const data = await res.json();
      dispatch(finishRequestWithSuccess());
      dispatch(LoginAccess(true));
      dispatch(UserAccess(data));
    } catch (err) {
      console.error(err);
      dispatch(finishRequestWithError());
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
