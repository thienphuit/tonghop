import React from 'react'
import {
  View, Dimensions, StyleSheet, TouchableOpacity,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Text from './Text'
import { TypoGrayphy, Colors } from '../../assets/styles'

const { width } = Dimensions.get('window')
const calWidth = width / 375
const ProductCart = (props) => {
  const {
    item, handleChooseItem, style, margin,
  } = props
  const { sImage } = { ...style }
  return (
    <TouchableOpacity onPress={() => handleChooseItem()}>
      <View style={[{
        padding: 16 * calWidth,
        borderColor: Colors.borderColor,
        borderRadius: 5 * calWidth,
        width: 141 * calWidth,
        justifyContent: 'center',
        marginRight: margin,
        borderWidth: StyleSheet.hairlineWidth,
      }, { ...style }]}
      >
        <FastImage
          source={{ uri: item.product_image_file }} 
          style={
            {
              width: sImage || 109 * calWidth,
              height: sImage || 109 * calWidth,
              borderRadius: 5 * calWidth,
            }
          }
          resizeMode="contain"
        />
        {/* <Image
          resizeMode="contain"
          source={productLike}
          
        /> */}
        <Text style={{ ...TypoGrayphy.heading6, paddingVertical: 8 * calWidth }}>{item.name}</Text>
        <Text style={{ color: Colors.primaryBlue, ...TypoGrayphy.bodyNormalTextBold }}>$299,43</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{
            paddingVertical: 8 * calWidth, ...TypoGrayphy.captionLargeTextRegular10, ...TypoGrayphy.captionLargeTextLine, color: Colors.neutralGrey,
          }}
          >
            {item.price}
          </Text>
          <Text style={{
            color: Colors.primaryRed, marginLeft: 8, ...TypoGrayphy.captionLargeTextRegular10,
          }}
          >
            {`${item.sale}% off`}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ProductCart
