import { createStore } from 'redux';
import rootReducer from '../reducers';

export default configureStore = (initialState) => {
  return createStore(rootReducer, initialState);
};