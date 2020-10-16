import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { calRepository, Colors, Fonts } from '../../assets/styles'

const TextComponent = (props) => {
  const { children, style = {} } = props
  const flatenStyle = StyleSheet.flatten(style)
  const { fontSize = 14, lineHeight = 15 } = flatenStyle
  const calFontSize = fontSize * calRepository
  const calLineHeight = lineHeight * calRepository
  return (
    <Text
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      style={{
        ...Fonts.light,
        color: Colors.primaryGrey,
        ...flatenStyle,
        fontSize: calFontSize,
        lineHeight: calLineHeight,
      }}
      allowFontScaling={false}
    >
      { children}
    </Text>
  )
}
export default TextComponent
