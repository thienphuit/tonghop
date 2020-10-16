import React, { useState, useEffect } from 'react'
import {
  View, StyleSheet, SafeAreaView,
} from 'react-native'
import { Button, TextInput, Header } from '../../components'
import {
  calWidth,
  Colors,
  mainPaddingH,
} from '../../../assets/styles'
import {
  messageBlue, passIcon,
} from '../../../assets/images'

const ChangePass = ({ route, navigation }) => {
  const [value, setValue] = useState(password)
  const [isActive, setIsActive] = useState(false)
  const handleButtonSave = () => {
  }

  useEffect(() => {
    setValue(password)
  }, [])
  const handleOnFocus = () => {
    setIsActive(isActive)
  }
  const handleOnchange = () => {
    // console.log('============================')
    // console.log('handleOnchange', event)
    // console.log('============================')
    // setIsActive(!isActive)
  }
  const { password } = route.params
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title="Change Password" navigation={navigation} />
      <View style={{ flex: 1, paddingHorizontal: mainPaddingH }}>

        <TextInput
          iconLeft={isActive && isActive ? messageBlue : passIcon}
          label="Old Password"
          placeholder={value}
          handleOnchange={handleOnchange}
          onFocus={handleOnFocus}
          isActive={isActive}
          secure
        />
        <TextInput
          iconLeft={isActive && isActive ? messageBlue : passIcon}
          label="New Password"
          placeholder={value}
          handleOnchange={handleOnchange}
          onFocus={handleOnFocus}
          isActive={isActive}
          secure
        />
        <TextInput
          iconLeft={isActive && isActive ? messageBlue : passIcon}
          label="New Password Again"
          placeholder={value}
          handleOnchange={handleOnchange}
          onFocus={handleOnFocus}
          isActive={isActive}
          secure
        />

      </View>
      <View style={{ marginHorizontal: mainPaddingH }}>
        <Button name="Save" handleClick={handleButtonSave} />
      </View>
      <SafeAreaView />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  picker: {
    paddingHorizontal: mainPaddingH,
    paddingVertical: 12 * calWidth,
    borderRadius: 5 * calWidth,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.neutralLine,
    marginTop: 12 * calWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export default ChangePass
