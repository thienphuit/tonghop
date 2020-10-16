/* eslint-disable react/jsx-props-no-spreading */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import {
  LogBox,
} from 'react-native'
// import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import FlashMessage from 'react-native-flash-message'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  SplashScreen, LoginScreen, RegisterScreen,
  HomeScreen, AccountScreen, Profile, ChangeName, Gender, ExploreScreen,
  CartScreen, OfferScreen, Phone, Email, BirthDay, ChangePass, NotificationScreen, Address, ProducDetail,
} from './src/screens'
import { SCREEN_NAME } from './src/configs'
import store from './src/redux/store'
import { navigationRef } from './src/utils/NavigationHelpers'
import { BottomTabView } from './src/components'

LogBox.ignoreLogs(['Sending `onAnimatedValueUpdate` with no listeners registered.'])
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const MainTab = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomTabView {...props} />}
    >
      <Tab.Screen name={SCREEN_NAME.HomeScreen} component={HomeScreen} options={{ title: 'Home' }} />
      <Tab.Screen name={SCREEN_NAME.ExploreScreen} component={ExploreScreen} options={{ title: 'Explore' }} />
      <Tab.Screen name={SCREEN_NAME.CartScreen} component={CartScreen} options={{ title: 'Cart' }} />
      <Tab.Screen name={SCREEN_NAME.OfferScreen} component={OfferScreen} options={{ title: 'Offer' }} />
      <Tab.Screen name={SCREEN_NAME.AccountScreen} component={AccountScreen} options={{ title: 'Account' }} />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name={SCREEN_NAME.SplashScreen} component={SplashScreen} />
          <Stack.Screen name={SCREEN_NAME.LoginScreen} component={LoginScreen} />
          <Stack.Screen name={SCREEN_NAME.RegisterScreen} component={RegisterScreen} />
          <Stack.Screen name={SCREEN_NAME.MAIN_TAB} component={MainTab} />
          <Stack.Screen name={SCREEN_NAME.Profile} component={Profile} />
          <Stack.Screen name={SCREEN_NAME.ChangeName} component={ChangeName} />
          <Stack.Screen name={SCREEN_NAME.Gender} component={Gender} />
          <Stack.Screen name={SCREEN_NAME.Phone} component={Phone} />
          <Stack.Screen name={SCREEN_NAME.Email} component={Email} />
          <Stack.Screen name={SCREEN_NAME.BirthDay} component={BirthDay} />
          <Stack.Screen name={SCREEN_NAME.ChangePass} component={ChangePass} />
          <Stack.Screen name={SCREEN_NAME.Notification} component={NotificationScreen} />
          <Stack.Screen name={SCREEN_NAME.Address} component={Address} />
          <Stack.Screen name={SCREEN_NAME.ProducDetail} component={ProducDetail} />
        </Stack.Navigator>
      </NavigationContainer>
      <FlashMessage position="top" />
    </Provider>
  )
}

export default App
