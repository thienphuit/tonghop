import React from 'react'
import {
  View, Image, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, TextInput, ScrollView,
} from 'react-native'
import {
  back, bgLogin, iconFb, iconGoogle,
} from '../../../assets/images'
import { Text } from '../../components'
import { calRepository, Colors, Fonts } from '../../../assets/styles'
import Button from '../../components/Button'
import { SCREEN_NAME } from '../../configs'

const { width } = Dimensions.get('window')
const LoginScreen = (props) => {
  const { navigation } = props
  return (
    <ScrollView>
      <View style={styles.container}>
        <SafeAreaView />
        <View>
          <Image source={bgLogin} style={{ height: 300 * calRepository }} resizeMode="cover" />
          <View style={{ position: 'absolute', marginTop: 50 * calRepository }}>
            <Image source={back} style={{ width: 55 * calRepository, height: 55 * calRepository }} resizeMode="contain" />
            <View style={{
              marginTop: 30 * calRepository, width: width - 40 * calRepository,
            }}
            >
              <Text style={{
                textAlign: 'center',
                ...Fonts.bold,
                lineHeight: 38,
                fontSize: 28,
                color: Colors.primaryBlackText,
              }}
              >
                Welcome back
              </Text>
              <Button icon={iconFb} title="continue with facebook" style={{ marginTop: 20 * calRepository, paddingHorizontal: 20 * calRepository }} handleSubmit={() => navigation.navigate(SCREEN_NAME.MainTab, { screen: SCREEN_NAME.HomeScreen })} />
              <TouchableOpacity onPress={() => { }}>
                <View style={styles.buttonGoogle}>
                  <View style={{
                    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
                  }}
                  >
                    <Image
                      source={iconGoogle}
                      style={{
                        width: 24 * calRepository,
                        height: 24 * calRepository,
                      }}
                      resizeMode="contain"
                    />
                    <Text style={styles.titleButton}>countinue with goolge</Text>
                    <View />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 40, flex: 1 }}>
          <Text style={{ textAlign: 'center', textTransform: 'uppercase' }}>Or Log in with mail</Text>
          <View style={{ marginTop: 40 }}>
            <View style={{
              padding: 20,
              borderRadius: 15,
              backgroundColor: Colors.borderColor,
            }}
            >
              <TextInput placeholder="Email address" />
            </View>
            <View style={{
              padding: 20,
              marginTop: 20,
              borderRadius: 15,
              backgroundColor: Colors.borderColor,
            }}
            >
              <TextInput placeholder="Email address" />
            </View>
            <Button style={{ marginVertical: 20 }} title="Login" handleSubmit={() => navigation.navigate(SCREEN_NAME.MainTab, { screen: SCREEN_NAME.HomeScreen })} />
            <Text style={{ textAlign: 'center', marginBottom: 100 }}>Forgot password</Text>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAME.LoginScreen)}>
              <View style={{ marginBottom: 40 }}>
                <Text style={{ textAlign: 'center' }}>
                  ALREADY HAVE AN ACCOUNT?
                  {' '}
                  <Text style={{ color: Colors.bgButtonPurple }}>LOG IN</Text>
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.background,
    paddingHorizontal: 20,

  },
  buttonGoogle: {
    padding: 20 * calRepository,
    borderRadius: 38 * calRepository,
    justifyContent: 'center',
    marginTop: 20,
    // alignItems: 'center',
    // backgroundColor: Colors.backgroundButton,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.borderColor,
  },
  titleButton: {
    color: Colors.primaryBlackText,
    ...Fonts.light,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
})
export default LoginScreen
