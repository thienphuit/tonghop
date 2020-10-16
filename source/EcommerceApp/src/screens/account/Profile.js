/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import {
  View, StyleSheet, SafeAreaView, Image, TouchableOpacity,
} from 'react-native'
import { useSelector } from 'react-redux'
import { Text, ProfileItem, Header } from '../../components'
import {
  calWidth,
  Colors,
  mainPaddingH,
  TypoGrayphy,
} from '../../../assets/styles'
import {
  avatar,
  messageBlue,
  dateBlue,
  phoneBlue,
  genderIcon,
  passIcon,
} from '../../../assets/images'
import { SCREEN_NAME } from '../../configs'
import { Helpers } from '../../utils'

const Profile = (props) => {
  const { navigation } = props
  const { profileUser } = useSelector((state) => state.user)
  const {
    fullname, email, gender, phone,
  } = profileUser
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title={SCREEN_NAME.Profile} {...props} />
      <View style={styles.viewWrapper}>
        <View style={styles.viewProfile}>
          <Image source={avatar} style={styles.avatar} />
          <TouchableOpacity
            onPress={() => navigation.navigate(SCREEN_NAME.ChangeName, {
              name: fullname,
            })}
          >
            <View style={styles.viewAvatarName}>
              <Text style={styles.titleName}>{fullname}</Text>
              <Text style={styles.gmail}>{email}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <ProfileItem
          image={genderIcon}
          label="Gender"
          value={Helpers.capitalize(gender)}
          nextScreen={() => navigation.navigate(SCREEN_NAME.Gender, { gen: gender })}
        />
        <ProfileItem
          image={dateBlue}
          label="Birthday"
          value="12-12-2000"
          nextScreen={() => navigation.navigate('BirthDay', {
            itemId: 1,
            date: '2000-12-12',
          })}
        />
        <ProfileItem
          image={messageBlue}
          label="Email"
          value={email}
          nextScreen={() => navigation.navigate(SCREEN_NAME.Email, {
            email,
          })}
        />
        <ProfileItem
          image={phoneBlue}
          label="Phone Number"
          value={phone}
          nextScreen={() => navigation.navigate(SCREEN_NAME.Phone, {
            phone,
          })}
        />
        <ProfileItem
          image={passIcon}
          label="Change Password"
          value="•••••••••••••••••"
          nextScreen={() => navigation.navigate('ChangePass', {
            password: '•••••••••••••••••',
          })}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  gmail: {
    ...TypoGrayphy.bodyNormalTextRegular,
    color: Colors.neutralGrey,
  },
  titleName: { ...TypoGrayphy.heading5 },
  viewAvatarName: {
    marginLeft: mainPaddingH,
  },
  avatar: {
    width: 72 * calWidth,
    height: 72 * calWidth,
  },
  viewProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 24 * calWidth,
    marginBottom: 32 * calWidth,
  },
  viewWrapper: { flex: 1, paddingHorizontal: mainPaddingH },
  container: {
    flex: 1,
  },
})

export default Profile
