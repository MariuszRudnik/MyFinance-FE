import { applyMiddleware, combineReducers, createStore } from 'redux';
import state from '../initialState/state';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import loginRedux from '../reducers/loginRedux';

const rootReducer = {
  login: loginRedux
};

const reducer = combineReducers(rootReducer);

const store = createStore(reducer, state, composeWithDevTools(applyMiddleware(thunk)));

export default store;
