import React from 'react'
import {
  View, TextInput, StyleSheet, Image,
} from 'react-native'
import {
  calWidth,
  Colors,
  mainPaddingH,
  TypoGrayphy,
} from '../../assets/styles'
import Text from './Text'

const Input = (props) => {
  const {
    label, iconRight, placeholder, iconLeft, handleOnchange, onFocus, isActive, secure,
  } = props
  console.log('============================')
  console.log('secure', secure)
  console.log('============================')
  return (
    <View style={{
      marginTop: 24 * calWidth,
    }}
    >
      <Text style={{ ...TypoGrayphy.heading5 }}>{label}</Text>
      <View style={[styles.borderInput, { borderColor: isActive ? Colors.primaryBlue : Colors.neutralLine }]}>
        {iconLeft && iconLeft ? <Image
          source={iconLeft}
          style={{
            marginLeft: mainPaddingH,
            width: 24 * calWidth,
            height: 24 * calWidth,
            tintColor: isActive ? Colors.primaryBlue : Colors.neutralGrey,
          }}
        /> : null}
        <TextInput
          {...props}
          autoCorrect={false}
          style={styles.input}
          placeholder={placeholder}
          onFocus={onFocus}
          onChangeText={(text) => handleOnchange(text)}
          secureTextEntry={secure}
        // secure
        />
        {iconRight && iconRight ? <Image source={iconRight} style={{ marginHorizontal: mainPaddingH, width: 24 * calWidth, height: 24 * calWidth }} /> : null}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  borderInput: {
    flexDirection: 'row',
    borderWidth: StyleSheet.hairlineWidth,
    paddingVertical: 12 * calWidth,
    borderRadius: 5,
    marginTop: 12,
    alignItems: 'center',
  },
  input: {

    flex: 1,
    marginLeft: 12,
    color: Colors.neutralGrey,
  },
})
export default Input
