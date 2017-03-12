import { connect } from 'react-redux';
import RoundScreen from '../components/RoundScreen';
import { getScore } from '../reducers/createPlayer';
import { getRound } from '../reducers/round';

const mapStateToProps = state => ({
  p1: getScore(state, 'p1'),
  p2: getScore(state, 'p2'),
  round: getRound(state),
});

const Round = connect(mapStateToProps, null)(RoundScreen);

export default Round;