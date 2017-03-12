import { connect } from 'react-redux';
import { resetGame } from '../reducers';
import VictoryScreen from '../components/VictoryScreen';

const mapDispatchToProps = dispatch => ({
  reset() {
    dispatch(resetGame());
  },
});

const Victory = connect(null, mapDispatchToProps)(VictoryScreen);

export default Victory;