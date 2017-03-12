import { combineReducers } from 'redux';

const INC = 'INC';
const RESET = 'RESET';

const createPlayer = (name, isTeller) => {
  const name = (state = name, action) => {
    return state;
  };

  const isTeller = (state = isTeller, action) => {
    switch (action.type) {
      case SWITCH:
        return !state;
      default:
        return state;
    }
  };

  const score = (state = 0, action) => {
    // check if currently telling
    let isTeller = isTeller(state.isTeller, action);

    switch (action.type) {
      // Investigator guessed incorrectly
      case RESET:
        return 0;
      // Investigator guessed correctly
      case INC:
        return (!isTeller) ? state + 1 : state;
      default:
        return state;
    }
  };


  return combineReducers({
    name,
    score,
    isTeller,
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

export const getScore = (state, name) => state.name.score;
export const getIsTeller = (state, name) => state.name.isTeller;