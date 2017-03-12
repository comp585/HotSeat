import React, { Component } from 'react';
import { Navigator } from 'react-native';
import StartScreen from '../components/StartScreen';
import TopicScreen from '../components/TopicScreen';
import QuestionScreen from '../components/QuestionScreen';
import SelectionScreen from './Selection';
import ResultScreen from './Result';
import AssignmentScreen from './Assignment';
import RoundScreen from './Round';
import VictoryScreen from '../components/VictoryScreen';

class App extends Component {
  renderScene(route, navigator) {
    switch (route.name) {
      case 'Start':
        return <StartScreen navigator={navigator} />;
      case 'Assign':
        return <AssignmentScreen navigator={navigator} {...route.passProps} />;
      case 'Topic':
        return <TopicScreen navigator={navigator} {...route.passProps} />;
      case 'Question':
        return <QuestionScreen navigator={navigator} {...route.passProps} />;
      case 'Selection':
        return <SelectionScreen navigator={navigator} {...route.passProps} />;
      case 'Result':
        return <ResultScreen navigator={navigator} {...route.passProps} />;
      case 'Round':
        return <RoundScreen navigator={navigator} {...route.passProps} />;
      case 'Victory':
        return <VictoryScreen navigator={navigator} {...route.passProps} />;
      default:
        throw new Error(`Unknown route: ${route.name}`);
    }
  }

  render() {
    return (
      <Navigator
        style={{ flex: 1 }}
        initialRoute={{ name: 'Start' }}
        renderScene={this.renderScene}
      />
    );
  }

}

export default App;