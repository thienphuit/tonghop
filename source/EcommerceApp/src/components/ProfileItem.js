import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { rightICon } from '../../assets/images'
import Text from './Text'
import {
  calWidth, mainPaddingH, TypoGrayphy, Colors,
} from '../../assets/styles'

const ProfileItem = (props) => {
  const {
    label, image, value, nextScreen,
  } = props
  return (
    <TouchableOpacity onPress={() => nextScreen()}>
      <View style={{
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: mainPaddingH,
      }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={image} style={{ width: 24 * calWidth, height: 24 * calWidth, tintColor: Colors.primaryBlue }} resizeMode="contain" />
          <Text style={{ marginLeft: mainPaddingH, ...TypoGrayphy.heading6 }}>{label}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ marginRight: mainPaddingH, color: Colors.neutralGrey }}>{value}</Text>
          <Image source={rightICon} resizeMode="contain" style={{ width: 24 * calWidth, height: 24 * calWidth }} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

ProfileItem.prototype = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any,
}

export default ProfileItem
