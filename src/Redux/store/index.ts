import { applyMiddleware, combineReducers, createStore } from 'redux';
import state from '../initialState/state';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import loginRedux from '../reducers/loginRedux';
import walletRedux from '../reducers/walletRedux';

const rootReducer = {
  login: loginRedux,
  wallet: walletRedux
};

const reducer = combineReducers(rootReducer);

const store = createStore(reducer, state, composeWithDevTools(applyMiddleware(thunk)));

export default store;
