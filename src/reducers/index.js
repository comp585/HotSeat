import { combineReducers } from 'redux';
import createPlayerReducer from './createPlayer';
import answerReducer from './answer';
import topicReducer from './topic';
import roundReducer from './round';

const RESET_GAME = 'RESET_GAME';

const player1 = 'Player 1';
const player2 = 'Player 2';

const appReducer = combineReducers({
  answer: answerReducer,
  p1: createPlayerReducer(player1, true),
  p2: createPlayerReducer(player2, false),
  topic: topicReducer,
  round: roundReducer,
})

const rootReducer = (state, action) => {
  if (action.type === RESET_GAME) {
    state = undefined;
  }

  return appReducer(state, action);
}

export default rootReducer;

export const resetGame = () => {
  return {
    type: RESET_GAME,
  };
};

export const getTeller = (state) => {
  return state.p1.role ? player1 : player2;
};