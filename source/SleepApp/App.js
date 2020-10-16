/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Provider } from 'react-redux'
import { SCREEN_NAME } from './src/configs'
import {
  AfsarScreen, HomeScreen, LoginScreen, MusicScreen, SleepScreen, MeditateScreen, PlaylistScreen, CourceDetails,
} from './src/screens'
import SigupAndSigIn from './src/screens/auth/SigupAndSigIn'
import { BottomTabView } from './src/components'
import store from './src/redux/store'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function MainTabs() {
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomTabView {...props} />}
    >
      <Tab.Screen name={SCREEN_NAME.HomeScreen} component={HomeScreen} options={{ title: 'Home' }} />
      <Tab.Screen name={SCREEN_NAME.SleepScreen} component={SleepScreen} options={{ title: 'Sleep' }} />
      <Tab.Screen name={SCREEN_NAME.MeditateScreen} component={MeditateScreen} options={{ title: 'Meditate' }} />
      <Tab.Screen name={SCREEN_NAME.MusicScreen} component={MusicScreen} options={{ title: 'Music' }} />
      <Tab.Screen name={SCREEN_NAME.AfsarScreen} component={AfsarScreen} options={{ title: 'Afsar' }} /> 
    </Tab.Navigator>
  )
}
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }}
        >
          <Stack.Screen name={SCREEN_NAME.SigupAndSigIn} component={SigupAndSigIn} />
          <Stack.Screen name={SCREEN_NAME.MainTab} component={MainTabs} />
          <Stack.Screen name={SCREEN_NAME.LoginScreen} component={LoginScreen} />
          <Stack.Screen name={SCREEN_NAME.CourceDetails} component={CourceDetails} />
          <Stack.Screen name={SCREEN_NAME.PlayScreenList} component={PlaylistScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
