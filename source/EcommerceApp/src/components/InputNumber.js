import React from 'react'
import {
  View, TouchableOpacity, Image, StyleSheet,
} from 'react-native'

import { calWidth, Colors, mainPaddingH } from '../../assets/styles'
import { plus, minus } from '../../assets/images'
import Text from './Text'

const InputNumber = (props) => {
  const { increate, number, decreate } = props
  return (
    <View style={styles.inputSpinner}>
      <TouchableOpacity onPress={() => increate()}>
        <View style={styles.viewSpinner}>
          <Image source={plus} style={styles.icon} resizeMode="contain" />
        </View>
      </TouchableOpacity>
      <View style={styles.viewNumber}>
        <Text>{number}</Text>
      </View>
      <TouchableOpacity onPress={() => decreate()}>
        <View style={styles.viewSpinner}>
          <Image source={minus} style={styles.icon} resizeMode="contain" />
        </View>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  viewNumber: {
    backgroundColor: Colors.neutralLine,
    width: 40 * calWidth,
    height: 24 * calWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: { width: mainPaddingH, height: mainPaddingH },
  viewSpinner: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8 * calWidth,
  },
  inputSpinner: {
    width: 104 * calWidth,
    height: 24 * calWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6 * calWidth,
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    borderColor: Colors.borderColor,
  },
})

export default InputNumber
