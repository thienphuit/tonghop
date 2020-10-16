import React, { useState } from 'react'
import {
  View, StyleSheet, SafeAreaView, Image, Dimensions, TouchableOpacity, ScrollView, Alert,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { showMessage, hideMessage } from 'react-native-flash-message'
import { userAction } from '../../redux/actions'
import { Text, Button, Input } from '../../components'
import {
  logoWhite, message, passIcon, iconUser,
} from '../../../assets/images'
import {
  TypoGrayphy, mainPaddingH, Colors, calWidth,
} from '../../../assets/styles'
import { SCREEN_NAME } from '../../configs'

const { width } = Dimensions.get('window')

const RegisterScreen = (props) => {
  const { navigation } = props
  const [fullName, setFullName] = useState('thien123')
  const [email, setEmail] = useState('b@gmail.com')
  const [password, setPassword] = useState('123456')
  const [passwordAgain, setPasswordAgain] = useState('123456')
  const handleTextInput = (func, text) => {
    func(text)
  }
  const dispatch = useDispatch()

  const handleRegister = () => {
    if (password !== passwordAgain) {
      Alert.alert('Pass sai nha')
      return
    }
    // if (!validateEmail(email)) {
    //   showMessage({
    //     message: 'email khong dung vui long nhap lai',
    //     type: 'danger',
    //     // type: "danger",
    //   })
    //   return
    // }
    dispatch(userAction.regiserUser({
      fullname: fullName,
      email,
      password,
    }, (response) => {
      if (response.success === false) {
        Alert.alert('Register fail')
        return
      }
      showMessage({
        message: 'Register thanh cong',
        type: 'danger',
        // type: "danger",
      })
      navigation.navigate(SCREEN_NAME.LoginScreen)
    }))
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <SafeAreaView />
        <View style={styles.viewWrapper}>
          <Image
            source={logoWhite}
            style={styles.logoWhite}
          />
          <Text style={styles.labelLetStart}>Let’s Get Started</Text>
          <Text style={styles.labelNewAccount}>Create an new account</Text>
        </View>
        <View style={styles.viewBody}>
          <Input
            placeholder="Full name"
            icon={iconUser}
            onChange={(text) => handleTextInput(setFullName, text)}
          />
          <Input
            placeholder="Your email"
            icon={message}
            value={email}
            onChange={(text) => handleTextInput(setEmail, text)}
          />
          <Input
            placeholder="Password"
            icon={passIcon}
            value={password}
            onChange={(text) => handleTextInput(setPassword, text)}
          />
          <Input
            placeholder="Password Again"
            icon={passIcon}
            onChange={(text) => handleTextInput(setPasswordAgain, text)}
          />
          <View style={{ marginTop: mainPaddingH }}>
            <Button name="Sign Up" handleClick={handleRegister} />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAME.LoginScreen)}>
            <View style={styles.signIn}>
              <Text style={{ ...TypoGrayphy.captionLargeTextBold12, color: Colors.neutralGrey }}>Have a account?</Text>
              <Text style={{ ...TypoGrayphy.linkLargeTextBold12, marginLeft: 4 }}>Sign in</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  signIn: {
    flexDirection: 'row',
    marginTop: 24 * calWidth,
    justifyContent: 'center',
    marginBottom: 20 * calWidth,
  },
  iconImage: {
    width: 24 * calWidth,
    height: 24 * calWidth,
    paddingLeft: 4 * calWidth,
    marginRight: 10 * calWidth,
  },
  viewBody: {
    marginTop: 28 * calWidth,
    width,
    paddingHorizontal: mainPaddingH,
  },
  labelNewAccount: { marginTop: mainPaddingH / 2 },
  labelLetStart: { ...TypoGrayphy.heading4, marginTop: mainPaddingH },
  viewInput: {
    borderRadius: 5 * calWidth,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.neutralLine,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 12 * calWidth,
    marginTop: 8 * calWidth,
  },
  logoWhite: {
    width: 72 * calWidth,
    height: 72 * calWidth,
    marginTop: 68 * calWidth,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  viewWrapper: { alignItems: 'center' },
})

export default RegisterScreen
