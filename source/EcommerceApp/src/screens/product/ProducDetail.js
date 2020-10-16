import React, { useState } from 'react'
import {
  View, StyleSheet, Image, Dimensions, FlatList, ScrollView, TouchableOpacity, SafeAreaView, Alert,
} from 'react-native'
import Swiper from 'react-native-swiper'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import FastImage from 'react-native-fast-image'
import {
  shoes_2, love_24, avatar, phoduct2, productLike, plus,
} from '../../../assets/images'
import {
  Text, SelecColorOption, Button, Header, SelecSizeOption, ProductCart, Rating,
} from '../../components'
import {
  TypoGrayphy, Colors, calWidth, mainPaddingH,
} from '../../../assets/styles'
import { SCREEN_NAME } from '../../configs'
import { cartAction } from '../../redux/actions'

const { width } = Dimensions.get('window')
// const calWidth = width / 375
const Fonts = {
  fontPoppins: {
    fontFamily: 'Poppins-Regular',
  },
  fontPoppinsBold: {
    fontFamily: 'Poppins-Bold',
  },
}
const productLikes = [
  { image: productLike },
  { image: shoes_2 },
  { image: phoduct2 },
]
const colorData = [
  Colors.primaryYellow,
  Colors.primaryBlue,
  Colors.primaryRed,
  Colors.primaryGreen,
  Colors.primaryPurple,
  Colors.neutralDark,
]
const nums = [
  '6', '6.5', '7', '7.5', '8', '8.5',
]

const ProducDetail = ({ navigation, route }) => {
  const [currentSize, setCurrentSize] = useState('6')
  const [currentColor, setCurrentColor] = useState(Colors.primaryYellow)
  const dispatch = useDispatch()

  const handleChooseOptionSize = (item) => {
    setCurrentSize(item)
  }

  const handlePagination = (index, total) => {
    const paginationView = []
    for (let paginationIndex = 0; paginationIndex < total; paginationIndex++) {
      paginationView.push(<View style={[styles.viewDot, 
        { backgroundColor: paginationIndex === index ? Colors.primaryBlue : Colors.neutralGrey }]}
      />)
    }
    return (
      <View style={styles.viewPagination}>
        {paginationView}
      </View>
    )
  }
  const products = useSelector((state) => state.products)
  const { swipperList } = products

  const { product } = route.params
  const handleAddToCart = () => {
    Alert.alert('Add to cart success')
    dispatch(cartAction.addCartToCart(product), (cart) => {
      console.tron.log({ cart })
    })
  }
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title={product.name} navigation={navigation} icon={plus} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.viewSwiper}>
            <Swiper
              showsPagination
              loop={false}
              renderPagination={handlePagination}
            >
              {swipperList.map((item) => {
                return (
                  <FastImage
                    key={`List Image ${item.id}`}
                    source={item.image}
                    style={styles.image}
                    resizeMode="cover"
                  />
                )
              })}
            </Swiper>
          </View>
          <View style={styles.viewWapper}>
            <View style={styles.viewTitle}>
              <View style={styles.viewTileRow}>
                <Text style={styles.nameProduct}>{product.name}</Text>
                <Image source={love_24} style={styles.iconFavorite} resizeMode="contain" />
              </View>
              <Rating rating={product.star} />
              <Text style={styles.price}>
                {product.price}
              </Text>
            </View>
            <View style={styles.viewPadding}>
              <Text style={styles.titleHeaderContent}>
                Select Size
              </Text>
              <FlatList
                data={nums}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                  return (
                    <SelecSizeOption
                      itemSize={item}
                      handleChooseOptionSize={handleChooseOptionSize}
                      isSelected={item === currentSize}
                    />
                  )
                }}
                keyExtractor={(item, index) => `List nums ${index}`}
              />
            </View>
            <View style={styles.viewPadding}>
              <Text style={styles.titleHeaderContent}>
                Select Color
              </Text>
              <FlatList
                data={colorData}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                  return (
                    <SelecColorOption
                      itemColor={item}
                      handleChooseColor={(color) => {
                        setCurrentColor(color)
                      }}
                      isSelected={item === currentColor}
                    />
                  )
                }}
                keyExtractor={(item, index) => `List Color ${index}`}
              />
            </View>
            <View style={styles.viewCateDetail}>
              <Text style={styles.titleHeaderContent}>
                Specification
              </Text>
              <View>
                <View style={styles.viewSpecition}>
                  <Text>Shown:</Text>
                  <View>
                    <Text style={styles.contentSpecication}>
                      Laser
                      {'\n'}
                      Blue/Anthracite/Watermel
                      {'\n'}
                      on/White
                    </Text>
                  </View>
                </View>
                <View style={styles.viewSpecitionStyle}>
                  <Text>Style:</Text>
                  <Text style={styles.contentSpecication}>
                    CD0113-400
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.viewCateDetail}>
              <View style={styles.viewReview}>
                <Text style={styles.titleHeaderContent}>
                  Review Product
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAME.WriteReview)}>
                  <Text style={styles.labelSeeMoreReview}>See More</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.viewRating}>
                <Rating rating="9" />
                <Text style={styles.titleRating}>4.5 (5 Review)</Text>
              </View>
              <View style={styles.contentReview}>
                <View style={styles.viewRating}>
                  <Image source={avatar} style={styles.avatarReview} />
                  <View style={styles.viewUserReview}>
                    <Text style={styles.titleUserReview}>James Lawson</Text>
                    <Rating rating={product.star} />
                  </View>
                </View>
                <Text style={styles.viewContentReview}>
                  air max are always very comfortable fit, clean and just perfect in every way.
                  just the box was too small and scrunched the sneakers up a little bit,
                  not sure if the box was always this small but the 90s are and will always be one of my favorites.
                </Text>
                {/* <FlatList
                  data={reviews}
                  horizontal
                  renderItem={({ item }) => {
                    return (
                      <Image style={styles.imageReview} source={item.image} />
                    )
                  }}
                  keyExtractor={(item, index) => `List review ${index}`}
                /> */}
                <Text style={styles.timeReview}>
                  December 10, 2016
                </Text>
              </View>
            </View>
            <View style={styles.viewCateDetail}>
              <Text style={styles.titleHeaderContent}>You Might Also Like</Text>
              <FlatList
                data={productLikes}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                  return (
                    <ProductCart item={item} margin={mainPaddingH} />
                  )
                }}
                keyExtractor={(item, index) => `List product like ${index}`}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonAddCart}>
        <Button name="Add To Cart" style={{ marginHorizontal: 20 * calWidth }} handleClick={handleAddToCart} />
        <SafeAreaView />
      </View>
      
    </View>
  )
}
const styles = StyleSheet.create({
  buttonAddCart: {
    marginBottom: mainPaddingH,
    position: 'absolute',
    bottom: 0,
    width,
  },
  timeReview: {
    color: Colors.neutralGrey,
    fontSize: 10,
    ...Fonts.fontPoppins,
    marginTop: mainPaddingH,
  },
  imageReview: {
    width: 72 * calWidth,
    height: 72 * calWidth,
    marginRight: 12 * calWidth,
  },
  viewContentReview: { marginVertical: mainPaddingH },
  titleUserReview: { ...TypoGrayphy.heading5 },
  titleRating: {
    marginLeft: 8 * calWidth,
    ...Fonts.fontPoppinsBold,
    color: Colors.neutralGrey,
  },
  viewUserReview: {
    justifyContent: 'space-between', height: 48 * calWidth, marginLeft: mainPaddingH,
  },
  avatarReview: { width: 48 * calWidth, height: 48 * calWidth, marginTop: 8 * calWidth },
  viewRating: { flexDirection: 'row', alignItems: 'center' },
  labelSeeMoreReview: { ...TypoGrayphy.linkLargeTextBold14 },
  viewReview: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  viewSpecitionStyle: { flexDirection: 'row', justifyContent: 'space-between', marginTop: mainPaddingH },
  contentSpecication: {
    textAlign: 'right', color: Colors.neutralGrey,
  },
  viewSpecition: { flexDirection: 'row', justifyContent: 'space-between' },
  viewCateDetail: { paddingTop: 24 * calWidth, paddingRight: mainPaddingH },
  viewPadding: { paddingTop: 24 * calWidth },
  iconFavorite: { width: 24 * calWidth, height: 24 * calWidth },
  viewTileRow: { flexDirection: 'row', justifyContent: 'space-between' },
  viewTitle: { paddingRight: mainPaddingH },
  viewWapper: { flex: 1, paddingLeft: mainPaddingH },
  viewSwiper: { width, height: 260 * calWidth },
  viewPagination: { flexDirection: 'row', justifyContent: 'center', paddingVertical: mainPaddingH },
  viewDot: {
    width: 8 * calWidth,
    height: 8 * calWidth,
    borderRadius: 4 * calWidth,
    marginRight: 8 * calWidth,
  },
  titleHeaderContent: {
    ...TypoGrayphy.heading5,
    marginBottom: 12 * calWidth,
  },

  circleSelected: {
    backgroundColor: Colors.backgroudWhite,
    width: mainPaddingH,
    height: mainPaddingH,
    borderRadius: 8 * calWidth,
  },
  circlePoint: {
    width: 48 * calWidth,
    height: 48 * calWidth,
    borderRadius: 24 * calWidth,
    borderColor: Colors.neutralLine,
    borderWidth: StyleSheet.hairlineWidth * 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backgroudWhite,
    marginRight: mainPaddingH,
  },
  price: {
    ...TypoGrayphy.heading3,
    color: Colors.primaryBlue,
  },
  nameProduct: {
    ...TypoGrayphy.heading3,
    width: 275 * calWidth,
  },
  image: {
    width,
    height: 238 * calWidth,
  },
  container: {
    flex: 1,
  },
  appBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: mainPaddingH,
    paddingBottom: 28 * calWidth,
    borderBottomColor: Colors.neutralLine,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingTop: 26 * calWidth,
  },
  titleAppbar: {
    marginLeft: 12 * calWidth,
    ...TypoGrayphy.heading4,

  },
})

ProducDetail.propTypes = {
  nameProduct: PropTypes.string.isRequired,
}
export default ProducDetail
