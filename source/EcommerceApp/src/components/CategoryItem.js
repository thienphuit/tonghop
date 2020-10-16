import React from 'react'
import { View, StyleSheet } from 'react-native'
import FastImage from 'react-native-fast-image'
import {
  Colors, TypoGrayphy, calWidth, mainPaddingH,
} from '../../assets/styles'
import Text from './Text'

const CategoryItem = (props) => {
  const { category, style } = props
  return (
    <View style={{
      width: 70 * calWidth, 
      alignItems: 'center',
      // marginLeft: 16 * calWidth,
      // marginRight: 12 * calWidth, 
      // marginLeft: category.id === 1 ? mainPaddingH : 0,
      ...style,
    }}
    >
      <View style={{
        width: 70 * calWidth,
        height: 70 * calWidth,
        borderRadius: 35 * calWidth,
        borderWidth: StyleSheet.hairlineWidth,
        justifyContent: 'center',
        borderColor: Colors.neutralLine,
        alignItems: 'center',
        marginBottom: 8 * calWidth,
      }}
      >
        <FastImage source={{ uri: category.category_image_file }} style={{ width: 24 * calWidth, height: 24 * calWidth }} resizeMode="contain" />
      </View>
      <Text style={{
        ...TypoGrayphy.captionLargeTextRegular10, color: Colors.neutralGrey, textAlign: 'center', width: 70 * calWidth, 
      }}
      >
        {category.name}
      </Text>
    </View>
  )
}

export default CategoryItem
