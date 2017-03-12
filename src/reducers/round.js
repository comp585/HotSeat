import { INC, RESET } from './createPlayer';

const round = (state = 1, action) => {
  switch (action.type) {
    case INC:
    case RESET:
      return state + 1;
    default:
      return state;
  }
};

export default round;

export const getRound = state => state.round;