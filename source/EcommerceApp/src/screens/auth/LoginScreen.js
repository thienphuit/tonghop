import React, { useState } from 'react'
import {
  View, StyleSheet, SafeAreaView, Image, TextInput, Dimensions, TouchableOpacity, ScrollView,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
// import { showMessage } from 'react-native-flash-message'
import { Text, Button } from '../../components'
import {
  logoWhite, message, iconGoogle, iconFB,
} from '../../../assets/images'
import {
  TypoGrayphy, mainPaddingH, Colors, calWidth,
} from '../../../assets/styles'
import { userAction, productAction, categoriesAction } from '../../redux/actions'
import { SCREEN_NAME } from '../../configs'
import { Helpers, NavigationHelpers } from '../../utils'

const { width } = Dimensions.get('window')

const LoginScreen = (props) => {
  const { navigation } = props
  const [showMessage, setShowMessage] = useState('')
  const dispath = useDispatch()
  const user = useSelector((state) => state.user)
  const [email, setEmail] = useState('bot1@gmail.com')
  const [password, setPassword] = useState('123456')
  const handleLogin = async () => {
    dispath(userAction.loginUser({
      email,
      password,
    }, (response) => {
      const { success, data } = response
      const { token } = data
      if (success) {
        // navigation.replace(SCREEN_NAME.HomeScreen)
        dispath(categoriesAction.getCategories({ token: user?.token }, (respose) => {
        }))
        dispath(productAction.getProduct({ token }, () => {
          // console.log('============================')
          // console.log('response', res)
          // console.log('============================')
        }))
        NavigationHelpers.navigateToScreenInTab(SCREEN_NAME.HomeScreen)
      } else {
        // Alert.alert(response.message)
        // setShowMessage(response.message)
        Helpers.showMes(response.message)
      }
    }))
  }
  const handleInput = (func, text) => {
    func(text)
  }
  const handleRegister = () => {
    navigation.navigate(SCREEN_NAME.RegisterScreen)
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <SafeAreaView />
        <View style={styles.viewHeader}>
          <Image source={logoWhite} style={styles.logo} />
          <Text style={styles.label}>Welcome to Lafyuu</Text>
          <Text style={styles.labelSignIn}>Sign in to continue</Text>
        </View>
        <View style={styles.viewWrapper}>
          <View style={styles.viewInput}>
            <Image
              source={message}
              style={styles.imageLogin}
              resizeMode="contain"
            />
            <TextInput placeholder="Your Email" onChangeText={(text) => handleInput(setEmail, text)} />
          </View>
          <View style={[styles.viewInput, { marginTop: 8 * calWidth, borderColor: showMessage && showMessage ? Colors.primaryRed : Colors.neutralLine }]}>
            <Image
              source={message}
              style={styles.imageLogin}
              resizeMode="contain"
            />
            <TextInput placeholder="Your Passwork" onChangeText={(text) => handleInput(setPassword, text)} />
          </View>
          {showMessage && showMessage ? <Text style={{ color: 'red' }}>{showMessage}</Text> : null}
          <View style={styles.viewButton}>
            <Button name="Sign In" handleClick={handleLogin} />
          </View>
          <View style={styles.viewDivider}>
            <View style={styles.divider} />
            <Text style={styles.labelDivider}>
              Or
            </Text>
            <View style={styles.divider} />
          </View>
          <View style={styles.viewLoginSocial}>
            <Image source={iconGoogle} style={styles.imageSocial} resizeMode="contain" />
            <Text style={styles.labelSocial}>
              Login with google
            </Text>
          </View>
          <View style={styles.viewLoginSocial}>
            <Image source={iconFB} style={styles.imageSocial} resizeMode="contain" />
            <Text style={styles.labelSocial}>
              Login with facebook
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.labelForgotPass}>Forget password</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRegister}>
            <View style={styles.viewDontAccount}>
              <Text style={styles.titleDontAccount}>Don`t have a account?</Text>
              <Text style={styles.buttonRegister}>Register</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  viewWrapper: {
    paddingHorizontal: mainPaddingH,
  },
  buttonRegister: {
    ...TypoGrayphy.linkLargeTextBold12,
    marginLeft: 4 * calWidth,
  },
  titleDontAccount: {
    ...TypoGrayphy.captionLargeTextBold12,
    color: Colors.neutralGrey,
  },
  viewDontAccount: {
    flexDirection: 'row',
    marginTop: 8 * calWidth,
    justifyContent: 'center',
    marginBottom: 20 * calWidth,
  },
  labelForgotPass: {
    textAlign: 'center',
    marginTop: mainPaddingH,
    ...TypoGrayphy.linkLargeTextBold12,
  },
  labelSocial: {
    textAlign: 'center',
    flex: 1,
    ...TypoGrayphy.bodyMediumTextBold,
    color: Colors.neutralGrey,
  },
  imageSocial: {
    width: 24 * calWidth,
    height: 24 * calWidth,
  },
  viewLoginSocial: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: mainPaddingH,
    borderRadius: 5 * calWidth,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.neutralLine,
    marginTop: mainPaddingH,
  },
  labelDivider: {
    ...TypoGrayphy.bodyMediumTextBold,
    color: Colors.neutralGrey,
    marginLeft: 23 * calWidth,
    marginRight: 23 * calWidth,
  },
  viewDivider: { flexDirection: 'row', marginTop: 20 * calWidth, alignItems: 'center' },
  divider: { height: 1 * calWidth, flex: 1, backgroundColor: Colors.neutralLine },
  viewButton: { marginTop: mainPaddingH },
  viewInput: {
    borderRadius: 5 * calWidth,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    padding: 12 * calWidth,
    borderColor: Colors.neutralLine,
  },
  viewHeader: {
    marginTop: 28 * calWidth,
    width,
    paddingHorizontal: mainPaddingH,
    alignItems: 'center',
  },
  imageLogin: {
    width: 24 * calWidth, height: 24 * calWidth, paddingLeft: 4 * calWidth, marginRight: 10 * calWidth,
  },
  labelSignIn: { marginVertical: 8 * calWidth },
  label: { ...TypoGrayphy.heading4, marginTop: mainPaddingH },
  logo: {
    width: 72 * calWidth,
    height: 72 * calWidth,
    marginTop: 68 * calWidth,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  // viewHeader: {  },
})

export default LoginScreen
