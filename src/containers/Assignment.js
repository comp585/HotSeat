import { connect } from 'react-redux';
import AssignmentScreen from '../components/AssignmentScreen';
import { newAnswer } from '../reducers/answer';

const mapDispatchToProps = dispatch => ({
  onInit(answer) {
    dispatch(newAnswer(answer));
  },
});

const Assignment = connect(null, mapDispatchToProps)(AssignmentScreen);

export default Assignment;