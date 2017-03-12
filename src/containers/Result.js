import { connect } from 'react-redux';
import { getScore } from '../reducers/createPlayer';
import ResultScreen from '../components/ResultScreen';

mapStateToProps = state => ({
  p1: getScore(state, 'p1'),
  p2: getScore(state, 'p2'),
  shouldSwitch: getScore(state, 'p1') === getScore(state, 'p2'),
});

const Result = connect(mapStateToProps, null)(ResultScreen);

export default Result;