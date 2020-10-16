import React from 'react'
import {
  View, TouchableOpacity, StyleSheet,
} from 'react-native'
import PropTyles from 'prop-types'
import {
  TypoGrayphy, calWidth, mainPaddingH, Colors,
} from '../../assets/styles'
import Text from './Text'

const Button = (props) => {
  const {
    name, handleClick, style, color,
  } = props
  // const flatenStyle = StyleSheet.flatten(style)
  return (
    <TouchableOpacity
      onPress={() => handleClick()}
    >
      <View style={{ ...styles.button, ...style }}>
        <Text style={{ ...styles.textButton, color: color || 'white' }}>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5 * calWidth,
    backgroundColor: Colors.primaryBlue,
    padding: mainPaddingH,
  },
  textButton: {
    ...TypoGrayphy.bodyMediumTextBold,
  },
})
Button.propTypes = {
  handleClick: PropTyles.func.isRequired,
  name: PropTyles.string.isRequired,
}

export default Button
