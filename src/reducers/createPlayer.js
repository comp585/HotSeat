import { combineReducers } from 'redux';

export const INC = 'INC';
export const RESET = 'RESET';

const createPlayer = (name, isTeller) => {
  const playerName = (state = name, action) => {
    return state;
  };

  const role = (state = isTeller, action) => {
    switch (action.type) {
      case RESET:
        return !state;
      default:
        return state;
    }
  };

  const score = (state = 0, action) => {
    switch (action.type) {
      // Investigator guessed incorrectly
      case RESET:
        return 0;
      // Investigator guessed correctly
      case INC:
        return (action.name === name) ? state : state + 1;
      default:
        return state;
    }
  };


  return combineReducers({
    name: playerName,
    score,
    isTeller: role,
  });
};

export default createPlayer;

export const incScore = (name) => {
  return {
    type: INC,
    name,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};

export const getScore = (state, name) => state[name].score;
export const getIsTeller = (state, name) => state[name].isTeller;