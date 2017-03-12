import { connect } from 'react-redux';
import SelectionScreen from '../components/SelectionScreen';
import { getAnswer } from '../reducers/answer';
import { incScore, reset } from '../reducers/createPlayer';

const mapStateToProps = state => ({
  answer: getAnswer(state),
});

const mapDispatchToProps = dispatch => ({
  onSelect: (won) => {
    if (won) {
      dispatch(incScore());
    } else {
      dispatch(reset());
    }
  } ,
});

const Selection = connect(mapStateToProps, mapDispatchToProps)(SelectionScreen);

export default Selection;