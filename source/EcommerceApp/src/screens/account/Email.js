import React, { useState, useEffect } from 'react'
import {
  View, StyleSheet, SafeAreaView,
} from 'react-native'
import {
  Text,
  Button,
  TextInput,
  Header,
} from '../../components'
import {
  calWidth,
  Colors,
  mainPaddingH,
} from '../../../assets/styles'
import {
  message,
} from '../../../assets/images'

const Email = ({ route, navigation }) => {
  const [value, setValue] = useState('Male')
  const [isActive, setIsActive] = useState(false)
  const handleButtonSave = () => {
  }

  useEffect(() => {
    setValue(email)
  }, [])
  const handleOnFocus = () => {
    setIsActive(!isActive)
  }
  const handleOnchange = () => {

  }
  const { email } = route.params
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title="Name" navigation={navigation} />
      <View style={styles.viewEmail}>
        <View>
          <TextInput
            iconLeft={message}
            label="Change Email"
            placeholder={value}
            handleOnchange={handleOnchange}
            onFocus={handleOnFocus}
            isActive={isActive}
          />
          <Text style={styles.titleContent}>We Will Send verification to your New Email</Text>
        </View>
      </View>
      <Button name="Save" handleClick={handleButtonSave} />
      <SafeAreaView />
    </View>
  )
}

const styles = StyleSheet.create({
  titleContent: {
    marginTop: 8 * calWidth, color: Colors.primaryBlue,
  },
  viewEmail: {
    flex: 1,
    paddingHorizontal: mainPaddingH,
  },
  container: {
    flex: 1,
  },
  picker: {
    paddingHorizontal: mainPaddingH,
    paddingVertical: 12,
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.neutralLine,
    marginTop: 12 * calWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export default Email
