import React, { useState, useEffect } from 'react'
import {
  View, StyleSheet, SafeAreaView,
} from 'react-native'
import {
  Button, TextInput, Header,
} from '../../components'
import {
  calWidth,
  Colors,
  mainPaddingH,
} from '../../../assets/styles'
import {
  phoneBlue,
} from '../../../assets/images'

const Phone = ({ route, navigation }) => {
  const [value, setValue] = useState(phone)
  const [isActive, setIsActive] = useState(false)
  const handleButtonSave = () => {
  }

  useEffect(() => {
    setValue(phone)
  }, [])
  const handleOnFocus = () => {
    setIsActive(!isActive)
  }
  const handleOnchange = () => {
    // console.log('============================')
    // console.log('handleOnchange', event)
    // console.log('============================')
    // setIsActive(!isActive)
  }
  const { phone } = route.params
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title="Phone" navigation={navigation} />
      <View style={styles.viewWrapper}>
        <View>
          <TextInput
            iconLeft={phoneBlue}
            label="Change Phone"
            placeholder={value}
            handleOnchange={handleOnchange}
            onFocus={handleOnFocus}
            isActive={isActive}
          />
          {/* <Text style={styles.introduce}>We Will Send verification to your New Email</Text> */}
        </View>

      </View>
      <View style={{ marginHorizontal: mainPaddingH }}>
        <Button name="Save" handleClick={handleButtonSave} />
      </View>
      <SafeAreaView />

    </View>
  )
}

const styles = StyleSheet.create({
  introduce: { marginTop: 8 * calWidth, color: Colors.primaryBlue },
  viewWrapper: { flex: 1, paddingHorizontal: mainPaddingH },
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

export default Phone
