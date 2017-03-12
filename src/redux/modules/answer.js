const NEW_ANSWER = 'NEW_ANSWER';

const answer = (state = false, action) => {
  switch (action.type) {
    case NEW_ANSWER:
      return action.answer;
    default:
      return state;
  }
};

export default answer;

export const newScore = (answer) => {
  return {
    type: NEW_ANSWER,
    answer,
  };
};