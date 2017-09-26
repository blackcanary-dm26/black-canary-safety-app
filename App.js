import React from 'react';
import { StyleSheet, AppRegistry } from 'react-native';

import { StackNavigator } from 'react-navigation';

import Home from './Components/Home';
import Situations from './Components/Situations'

const App = StackNavigator({
  Home: { screen: Home},
  Situations: { screen: Situations}
})

export default App;

// AppRegistry.registerComponent('black-canary-safety-app', () => App)

