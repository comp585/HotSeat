import Expo from 'expo';
import React from 'react';
import App from './src/components/App';
import {
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';

class Game extends React.Component {
  state = {
    isReady: false,
  }

  async componentWillMount() {
    if (Platform.OS === 'android') {
      await Expo.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      });
    }

    this.setState({isReady: true});
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.Components.AppLoading />;
    }

    return (
      <App />
    );
  }
}

Expo.registerRootComponent(Game);
