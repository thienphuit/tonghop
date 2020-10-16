import React from 'react'
import {
  View, StyleSheet, TouchableOpacity, Image, Dimensions,
} from 'react-native'
import { calRepository, Colors, Fonts } from '../../assets/styles'
import Text from './Text'

const { width } = Dimensions.get('window')
const Button = (props) => {
  const {
    title, style, handleSubmit, icon,
  } = props
  return (
    <TouchableOpacity onPress={() => handleSubmit()}>
      <View style={[styles.button, { ...style }]}>
        {!icon ? <Text style={[styles.title]}>{title}</Text>
          : <View style={{
            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
          }}
          >
            <Image
              source={icon}
              style={{ width: 12 * calRepository, height: 24 * calRepository }}
              resizeMode="contain"
            />
            <Text style={styles.title}>{title}</Text>
            <View />
          </View>}
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  button: {
    // paddingVertical: 25 * calRepository,
    height: 60 * calRepository,
    borderRadius: 38 * calRepository,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: Colors.backgroundButton,
  },
  title: {
    color: Colors.background,
    ...Fonts.light,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
})
export default Button
