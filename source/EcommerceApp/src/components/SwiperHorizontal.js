import React, { useEffect, useState } from 'react'
import {
  View, Image, StyleSheet, Dimensions, TouchableOpacity,
} from 'react-native'
import Swiper from 'react-native-swiper'
import CountDownComponent from './CountDownComponent'
import { Colors, calWidth, TypoGrayphy } from '../../assets/styles'
import Text from './Text'
import MainTitle from './MainTitle'

const { width } = Dimensions.get('window')

const SwiperHorizontal = (props) => {
  const handlePagination = (index, total) => {
    const paginationView = []
    for (let paginationIndex = 0; paginationIndex < total; paginationIndex++) {
      paginationView.push(<View key={paginationIndex} style={[styles.dotView, { backgroundColor: paginationIndex === index ? Colors.primaryBlue : Colors.neutralGrey }]} />)
    }
    return (
      <View style={styles.dotWrapper}>
        {paginationView}
      </View>
    )
  }

  const { products, handleChooseSwipper } = props
  
  return (
    <Swiper
      showsPagination
      loop={false}
      renderPagination={handlePagination}
    >
      {products.map((item) => {
        return (
          <TouchableOpacity key={`List Image ${item.id}`} onPress={() => handleChooseSwipper()}>
            <View style={{ width, height: 240 * calWidth }}>
              <Image source={item.image} style={styles.image} resizeMode="cover" />
              <View style={styles.imageBlur} />
              <View style={{ position: 'absolute', marginLeft: 24 * calWidth }}>
                <Text style={styles.title}>
                  Super Flash Sale 50% Off
                </Text>
                <CountDownComponent time="3600" />
              </View>
            </View>
          </TouchableOpacity>
        )
      })}
    </Swiper>
  )
}
const styles = StyleSheet.create({
  dotWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 16 * calWidth,
  },
  image: {
    width,
    height: 238 * calWidth,
  },
  imageBlur: {
    width,
    height: 238 * calWidth,
    backgroundColor: '#000',
    opacity: 0.3,
    position: 'absolute',
  },
  dotView: {
    width: 8 * calWidth,
    height: 8 * calWidth,
    borderRadius: 4 * calWidth,
    marginRight: 8 * calWidth,
  },
  title: {
    ...TypoGrayphy.heading2,
    width: 209 * calWidth,
    height: 72 * calWidth,
    marginVertical: 30 * calWidth,
    color: Colors.backgroudWhite,
  },
})

export default SwiperHorizontal
