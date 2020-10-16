import React, { useState } from 'react'
import {
  View, TextInput, StyleSheet, Image,
} from 'react-native'
import {
  Colors, calWidth,
} from '../../assets/styles'

const Input = (props) => {
  const {
    placeholder, icon, handleTextInput, value, onChange,
  } = props
  // const [value, setValue] = useState('')
  // const handleTextInput = (func, text) => {
  //   func(text)
  // }
  return (
    <View style={styles.viewInput}>
      <Image
        source={icon}
        style={styles.iconImage}
        resizeMode="contain"
      />
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={Colors.neutralGrey}
        onChangeText={onChange}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    marginLeft: 10 * calWidth,
    color: Colors.neutralGrey,
  },
  viewInput: {
    borderRadius: 5 * calWidth,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.neutralLine,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 12 * calWidth,
    marginTop: 8 * calWidth,
  },
  iconImage: {
    width: 24 * calWidth,
    height: 24 * calWidth,
    // paddingLeft: 4 * calWidth,
    // marginRight: 10 * calWidth,
  },
})
export default Input
