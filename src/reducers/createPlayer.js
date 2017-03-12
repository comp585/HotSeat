import { combineReducers } from 'redux';

export const INC = 'INC';
export const RESET = 'RESET';

const createPlayer = (name, isTeller) => {
  const playerName = (state = name, action) => {
    return state;
  };

  const playerRole = (state = isTeller, action) => {
    switch (action.type) {
      case RESET:
        return !state;
      default:
        return state;
    }
  };

  const score = (state = 0, action) => {
    // check if currently telling
    let role = playerRole(state.isTeller, action);

    switch (action.type) {
      // Investigator guessed incorrectly
      case RESET:
        return 0;
      // Investigator guessed correctly
      case INC:
        return (!role) ? state + 1 : state;
      default:
        return state;
    }
  };


  return combineReducers({
    name: playerName,
    score,
    isTeller: playerRole,
  });
};

export default createPlayer;

export const incScore = () => {
  return {
    type: INC,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};

export const getScore = (state, name) => state[name].score;
export const getIsTeller = (state, name) => state[name].isTeller;