const SELECT_TOPIC = 'SELECT_TOPIC'; 

const topic = (state = '', action) => {
  switch (action.type) {
    case SELECT_TOPIC:
      return action.topic;
    default:
      return state;
  }
}

export default topic;

export const selectTopic = (topic) => {
  return {
    type: SELECT_TOPIC,
    topic,
  };
};

export const getTopic = state => state.topic;