import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import {
  Colors, TypoGrayphy, calWidth,
} from '../../assets/styles'
import Text from './Text'

const NotificationMask = (props) => {
  const { number } = props
  return (
    <View style={styles.ellipseNotifcation}>
      <Text style={{
        ...TypoGrayphy.captionLargeTextBold10,
        color: Colors.backgroudWhite,
      }}
      >
        {number}
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  ellipseNotifcation: {
    width: 20 * calWidth,
    height: 20 * calWidth,
    borderRadius: 10 * calWidth,
    backgroundColor: Colors.primaryRed,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
NotificationMask.prototype = {
  number: PropTypes.string.isRequired,
}

export default NotificationMask
