import React, { useState, useRef } from 'react'
import {
  View, StyleSheet, SafeAreaView, Image, TouchableOpacity, Modal, Dimensions, Animated,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Text } from '../../components'
import {
  calWidth,
  Colors,
  mainPaddingH,
  Shadows,
  TypoGrayphy,
} from '../../../assets/styles'
import {
  userIcon, bagIcon, locationIcon, cardIcon, logoutIcon, iconClose,
} from '../../../assets/images'
import { userAction } from '../../redux/actions'
import { SCREEN_NAME } from '../../configs'
import { NavigationHelpers } from '../../utils'

const { width } = Dimensions.get('window')

const AccountScreen = ({ navigation }) => {
  const user = useSelector((state) => state.user)
  const { token } = user
  const dispatch = useDispatch()
  const handleGetProfile = async () => {
    dispatch(userAction.profileUser({ token }, () => {
    }))
    navigation.navigate(SCREEN_NAME.Profile)
  }
  const [isShowModalLogout, setIsShowModalLogout] = useState(false)
  const aniShowModal = useRef(new Animated.Value(0)).current
  const handleShowModalLogout = () => {
    setIsShowModalLogout(true)
    Animated.spring(aniShowModal, {
      toValue: 1,
      tension: 60,
      useNativeDriver: true,
    }).start()
  }
  const handleHideModalLogout = () => {
    setIsShowModalLogout(false)
    Animated.spring(aniShowModal, {
      toValue: 0,
      tension: 60,
      useNativeDriver: true,
    }).start(() => {})
  }
  const tranY = aniShowModal.interpolate({
    inputRange: [0, 1],
    outputRange: [600, 0],
  })
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={{
        paddingVertical: 26 * calWidth,
        borderBottomWidth: 2 * StyleSheet.hairlineWidth,
        borderBottomColor: Colors.borderColor,
      }}
      >
        <Text style={styles.headerTitle}>Account</Text>
      </View>
      <View style={styles.viewWapper}>
        <TouchableOpacity onPress={handleGetProfile}>
          <View style={styles.acountView}>
            <Image source={userIcon} style={styles.image} resizeMode="contain" />
            <Text style={styles.title}>Profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAME.Order)}>
          <View style={styles.acountView}>
            <Image source={bagIcon} style={styles.image} resizeMode="contain" />
            <Text style={styles.title}>Other</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAME.Address)}>
          <View style={styles.acountView}>
            <Image source={locationIcon} style={styles.image} resizeMode="contain" />
            <Text style={styles.title}>Address</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAME.Payment)}>
          <View style={styles.acountView}>
            <Image source={cardIcon} style={styles.image} resizeMode="contain" />
            <Text style={styles.title}>Payment</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShowModalLogout}>
          <View style={styles.acountView}>
            {/* <Image source={cardIcon} style={styles.image} resizeMode="contain" /> */}
            <Text style={[styles.title, { color: Colors.primaryRed, ...TypoGrayphy.heading5 }]}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Modal
        transparent
        visible={isShowModalLogout}
      >
        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.7)',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        >
          <Animated.View style={[{
            width: 330 / 375 * width,
            height: 250 / 375 * width,
            backgroundColor: Colors.backgroudWhite,
            borderRadius: 10 / 375 * width,
            alignItems: 'center',
            padding: 15,
          },
          {
            transform: [{
              translateY: tranY,
            }],
          },
          ]}
          >
            <View style={{ alignSelf: 'flex-end' }}>
              <TouchableOpacity
                onPress={handleHideModalLogout}
              >
                <Image
                  source={iconClose}
                  style={{ width: 15 / 375 * width, height: 15 / 375 * width }}
                />
              </TouchableOpacity>
            </View>
            <Image
              source={logoutIcon}
              style={{ width: 55 / 375 * width, height: 55 / 375 * width, marginBottom: 15 / 375 * width }}
            />
            <Text style={{
              ...TypoGrayphy.heading4,
              color: Colors.neutralDark,
            }}
            >
              We’re sad to see you go!
            </Text>
            <Text style={{
              ...TypoGrayphy.heading6,
              color: Colors.neutralDark,
              marginTop: 19 / 375 * width,
              marginBottom: 24 / 375 * width,
            }}
            >
              Are you sure you want to log out now?
            </Text>

            <TouchableOpacity
              onPress={() => {
                dispatch({ type: 'USER_LOGOUT' })
                handleHideModalLogout()
                NavigationHelpers.navigateToScreenAndReplace(SCREEN_NAME.LoginScreen)
              }}
            >
              <View style={{
                width: 250 / 375 * width,
                height: 40 / 375 * width,
                backgroundColor: Colors.primaryRed,
                borderRadius: 5 / 375 * width,
                justifyContent: 'center',
                alignItems: 'center',
                ...Shadows.buttonShadow,
                marginHorizontal: 10,
                marginBottom: 10,
              }}
              >
                <Text style={{
                  ...TypoGrayphy.heading6,
                  color: Colors.backgroudWhite,
                }}
                >
                  Log Out
                </Text>
              </View>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>

    </View>
  )
}

const styles = StyleSheet.create({
  viewWapper: { flex: 1 },
  container: {
    flex: 1,
  },
  headerTitle: {
    ...TypoGrayphy.heading4,
    marginLeft: mainPaddingH,
  },
  acountView: {
    padding: mainPaddingH,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    ...TypoGrayphy.heading6,
    marginLeft: mainPaddingH,
  },
  image: {
    width: 24 * calWidth,
    height: 24 * calWidth,
    tintColor: Colors.primaryBlue,
  },
})

export default AccountScreen
