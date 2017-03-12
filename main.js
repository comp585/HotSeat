import Expo from 'expo';
import React from 'react';
import App from './src/containers/App';
import {
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/store/createStore';

const store = configureStore();

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
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

Expo.registerRootComponent(Game);
