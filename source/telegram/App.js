import React from 'react';

import {View, Text, Button, Image, Platform, Dimensions} from 'react-native';

import {profile} from './assets/images';

const { width  } = Dimensions.get('window');
import Profile from './src/screens/Profile';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Profile/>
     )
  }
}

export default App
