import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  View, StyleSheet, SafeAreaView, Dimensions, FlatList,
} from 'react-native'
import { createSelector } from 'reselect'
import {
  SwiperHorizontal, ProductCart,
  HeaderComponent, SaleOffComponent, CategoryItem,
  MainTitle,
} from '../../components'
import {
  Colors, TypoGrayphy, mainPaddingH, calWidth,
} from '../../../assets/styles'
import { promotionImage } from '../../../assets/images'
import { SCREEN_NAME } from '../../configs'
import { Helpers, NavigationHelpers } from '../../utils'

const { width } = Dimensions.get('window')

const HomeScreen = (props) => {
  const { navigation } = props
  const [onFocus, setOnFocus] = useState(false)
  // const dispatch = useDispatch()
  const handleFocus = () => {
    setOnFocus(true)
  }
  const handleViewProductDetail = (product) => {
    NavigationHelpers.navigateToScreen(SCREEN_NAME.ProducDetail, { product })
  }

  const {
    swipperList, products,
  } = useSelector((state) => state.products)
  // eslint-disable-next-line no-shadow
  const categories = useSelector(createSelector((state) => state.categories, (categories) => categories))
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <HeaderComponent navigation={navigation} handleFocus={handleFocus} onFocus={onFocus} handleClick={() => navigation.navigate(SCREEN_NAME.SearchScreen)} />
      <View style={styles.divider} />
      <View style={styles.container}>
        <View style={{ paddingTop: mainPaddingH, flex: 1 }}>
          <FlatList
            data={products.all}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <View>
                <View style={styles.swipperWrapper}>
                  <SwiperHorizontal products={swipperList} handleChooseSwipper={() => navigation.navigate(SCREEN_NAME.SubperSale)} />
                </View>
                <View>
                  <MainTitle title="Category" buttonTitle="More Category" />
                  <FlatList
                    horizontal
                    style={{ marginTop: 12 * calWidth, marginBottom: 24 * calWidth }}
                    showsHorizontalScrollIndicator={false}
                    data={categories}
                    renderItem={({ item }) => {
                      return (
                        <CategoryItem style={{ marginLeft: mainPaddingH }} category={item} />
                      )
                    }}
                    keyExtractor={(item, index) => `List category ${index}`}
                  />
                </View>
                <View>
                  <MainTitle title="Flash Sale" buttonTitle="See More" />
                  <FlatList
                    data={products?.flashSale}
                    style={{ marginLeft: mainPaddingH, marginTop: 12 * calWidth }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                      return (
                        <ProductCart
                          margin={mainPaddingH}
                          item={item}
                          handleChooseItem={() => handleViewProductDetail(item)}
                        />
                      )
                    }}
                    keyExtractor={(item) => `Productline list ${item.id}`}
                  />
                </View>
                <View style={{ marginTop: 24 * calWidth }}>
                  <MainTitle title="Mega Sale" buttonTitle="See More" />
                  <FlatList
                    data={products?.megaSale}
                    style={{ marginTop: 12 * calWidth, marginLeft: mainPaddingH }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                      return (
                        <ProductCart
                          item={item}
                          margin={mainPaddingH}
                          handleChooseItem={() => navigation.navigate(SCREEN_NAME.ProductDetail, {
                            item,
                          })}
                        />
                      )
                    }}
                    keyExtractor={(item) => `List product -${item.id}`}
                  />
                  <View style={{ marginHorizontal: mainPaddingH }}>
                    <SaleOffComponent content="We recomended the best for you" image={promotionImage} topic="Recomended Product" />
                  </View>
                </View>
              </View>
              
            }
            numColumns={2}
            renderItem={({ item }) => {
              return (
                <ProductCart
                  item={item}
                  handleChooseItem={() => navigation.navigate(SCREEN_NAME.ProductDetail, { nameProduct: 'Nike Air Max 270 Rea...' })}
                  style={{
                    width: 165 * calWidth,
                    height: 282 * calWidth,
                    sImage: 133 * calWidth,
                  }}
                />
              )
            }}
            columnWrapperStyle={{
              justifyContent: 'space-between',
              // marginBottom: 12 * calWidth,
              marginTop: mainPaddingH,
              marginHorizontal: mainPaddingH,
            }}
            keyExtractor={(item) => `ProductLike list ${item.id}`}
          />
        </View>
      </View>
      <SafeAreaView />
    </View>
  )
}

const styles = StyleSheet.create({
  moreCategory: { ...TypoGrayphy.linkLargeTextBold14 },
  titleCategory: { ...TypoGrayphy.heading5 },
  swipperWrapper: {
    width, height: 260 * calWidth,
  },
  labelCate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: mainPaddingH,
    marginBottom: 12 * calWidth,
  },
  divider: {
    marginBottom: 16 * calWidth,
    borderTopColor: Colors.neutralLine,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: mainPaddingH,
    alignItems: 'center',
    height: 46 * calWidth,
    marginHorizontal: mainPaddingH,
  },
})
export default HomeScreen
