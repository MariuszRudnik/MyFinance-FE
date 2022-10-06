import { createStore } from 'redux';
import { state } from '../action/state';
import { reducer } from '../reducers';

/* eslint-disable no-underscore-dangle */
// @ts-ignore
const store = createStore(
  reducer,
  state,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export default store;
