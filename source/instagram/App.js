/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import NewFeed from './src/NewFeed';
import GaleryScreen from './src/GaleryScreen';

const App: () => React$Node = () => {
  return <NewFeed />
};

export default App;
