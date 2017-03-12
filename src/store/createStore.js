import { createStore } from 'redux';
import rootReducer from '../reducers';
import devToolsEnhancer from 'remote-redux-devtools';

export default configureStore = () => {
  return createStore(rootReducer, devToolsEnhancer({ realtime: true }));
};