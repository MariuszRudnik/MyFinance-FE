import { createStore } from 'redux';
import { rootReducer } from '../reducers/index';

/* eslint-disable no-underscore-dangle */
// @ts-ignore
const store = createStore(
  rootReducer,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export default store;
