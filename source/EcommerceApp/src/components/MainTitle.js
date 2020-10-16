import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { TypoGrayphy, mainPaddingH } from '../../assets/styles'
import Text from './Text'

const MainTitle = ({
  title, buttonTitle, onRightButtonPress, 
}) => {
  return (
    <View style={styles.labelCate}>
      <Text style={styles.titleCategory}>{title}</Text>
      {buttonTitle ? <TouchableOpacity
        onPress={onRightButtonPress}
      >
        <Text style={styles.textButton}>
          {buttonTitle}
        </Text>
      </TouchableOpacity> : null}
    </View>
  )
}
const styles = StyleSheet.create({
  textButton: { ...TypoGrayphy.linkLargeTextBold14 },
  titleCategory: { ...TypoGrayphy.heading5 },
  labelCate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: mainPaddingH,
  },
})
MainTitle.defaultProps = {
  buttonTitle: '',
  onRightButtonPress: () => {},
}
MainTitle.propTypes = {
  title: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string,
  onRightButtonPress: PropTypes.func,
}
export default MainTitle
