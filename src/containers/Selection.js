import { connect } from 'react-redux';
import SelectionScreen from '../components/SelectionScreen';
import { getAnswer } from '../reducers/answer';

const mapStateToProps = state => ({
  answer: getAnswer(state),
});

const Selection = connect(mapStateToProps, null)(SelectionScreen);

export default Selection;