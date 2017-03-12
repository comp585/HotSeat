import { combineReducers } from 'redux';
import createPlayerReducer from './createPlayer';
import answerReducer from './answer';
import topicReducer from './topic';
import roundReducer from './round';

const rootReducer = combineReducers({
  answer: answerReducer,
  p1: createPlayerReducer('Player 1', true),
  p2: createPlayerReducer('Player 2', false),
  topic: topicReducer,
  round: roundReducer,
});

export default rootReducer;