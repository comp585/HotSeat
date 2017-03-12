import { connect } from 'react-redux';
import SelectionScreen from '../components/SelectionScreen';
import { getTeller } from '../reducers';
import { getAnswer } from '../reducers/answer';
import { incScore, reset } from '../reducers/createPlayer';

const mapStateToProps = state => ({
  answer: getAnswer(state),
  teller: getTeller(state),
});

const mapDispatchToProps = dispatch => ({
  onSelect: (won, name) => {
    if (won) {
      dispatch(incScore(name));
    } else {
      dispatch(reset());
    }
  } ,
});

const Selection = connect(mapStateToProps, mapDispatchToProps)(SelectionScreen);

export default Selection;