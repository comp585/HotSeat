import { combineReducers } from 'redux';
import createPlayerReducer from './createPlayer';
import answerReducer from './answer';

const rootReducer = combineReducers({
  answer: answerReducer,
  p1: createPlayerReducer('Player 1'),
  p2: createPlayerReducer('Player 2'),
});

export default rootReducer;