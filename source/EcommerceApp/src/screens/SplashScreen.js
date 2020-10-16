import React, { useEffect } from 'react'
import { View } from 'react-native'
import SplashScreenLib from 'react-native-splash-screen'
import { useSelector, useDispatch } from 'react-redux'
import { SCREEN_NAME } from '../configs'
import { categoriesAction, productAction } from '../redux/actions'

const SplashScreen = (props) => {
  const { navigation } = props
  const user = useSelector((state) => state?.user)
  const dispath = useDispatch()
  const persist = useSelector((state) => state._persist)
  useEffect(() => {
    if (persist.rehydrated) {
      if (!user?.token) {
        SplashScreenLib.hide()
        navigation.replace(SCREEN_NAME.LoginScreen)
        return
      }
      dispath(categoriesAction.getCategories({ token: user?.token }, () => {
      }))

      dispath(productAction.getProduct({ token: user?.token }, (response) => {
        if (!response.success) {
          SplashScreenLib.hide()
          navigation.replace(SCREEN_NAME.LoginScreen)
          return
        }
        SplashScreenLib.hide()
        navigation.replace(SCREEN_NAME.MAIN_TAB, { screen: SCREEN_NAME.HomeScreen })
      }))
    }
  }, [persist.rehydrated])
  return (
    <View />

  )
}
export default SplashScreen
