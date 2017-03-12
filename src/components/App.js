import React, { Component } from 'react';
import { Navigator } from 'react-native';
import StartScreen from './StartScreen';
import TopicScreen from './TopicScreen';
import QuestionScreen from './QuestionScreen';
import SelectionScreen from './SelectionScreen';
import TimerScreen from './TimerScreen';
import ResultScreen from './ResultScreen';
import AssignmentScreen from './AssignmentScreen';

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
      case 'Timer':
        return <TimerScreen navigator={navigator} {...route.passProps} />;
      case 'Result':
        return <ResultScreen navigator={navigator} {...route.passProps} />;
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
