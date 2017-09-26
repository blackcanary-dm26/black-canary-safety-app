import React from 'react';
import { StyleSheet, AppRegistry } from 'react-native';

import { StackNavigator } from 'react-navigation';

import Home from './Components/Home';
import Situations from './Components/Situations'
import Level1 from './Components/Level1'
import Level2 from './Components/Level2'
import Level3 from './Components/Level3'


const App = StackNavigator({
  Home: { screen: Home},
  Situations: { screen: Situations},
  Level1: { screen: Level1},
  Level2: { screen: Level2},
  Level3: { screen: Level3}
})

export default App;

// AppRegistry.registerComponent('black-canary-safety-app', () => App)

