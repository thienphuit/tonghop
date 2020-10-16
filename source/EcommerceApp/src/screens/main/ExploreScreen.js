import React from 'react'
import {
  View, StyleSheet, SafeAreaView, FlatList, Dimensions,
} from 'react-native'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { createSelector } from 'reselect'
import _ from 'lodash'
import {
  HeaderComponent, CategoryItem, MainTitle, 
} from '../../components'
import {
  calWidth, mainPaddingH, TypoGrayphy, Colors,
} from '../../../assets/styles'
import { SCREEN_NAME } from '../../configs'

const { width } = Dimensions.get('window')
const numColumns = 4
const titleSize = width / numColumns
const Explore = (props) => {
  const handleClick = () => {
    navigation.navigate(SCREEN_NAME.SearchScreen)
  }
  const { navigation } = props
  // eslint-disable-next-line no-shadow
  const categories = useSelector(createSelector((state) => state.categories, (categories) => categories))
  const maleCategories = _.filter(categories, { gender: 'male' })
  const femaleCategories = _.filter(categories, { gender: 'female' })
  return (
    
    <View style={styles.container}>
      <SafeAreaView />
      <HeaderComponent
        navigation={navigation}
        handleFocus={() => navigation.navigate(SCREEN_NAME.SearchScreen)}
        // onFocus={onFocus}
        handleClick={handleClick}
      />
      <View style={styles.wrapperExplore}>
        <FlatList
          numColumns={4}
          ListHeaderComponent={
            <MainTitle title="Man Fashion" />
            }
          ListHeaderComponentStyle={{ marginBottom: 12 * calWidth }}
          data={maleCategories}
            // style={{ marginBottom: 24 * calWidth }}
          columnWrapperStyle={styles.columnWrapperStyle}
          renderItem={({ item }) => {
            return (
              <CategoryItem category={item} style={styles.cateItem} />
            )
          }}
          keyExtractor={(item) => `List category ${item.id}`}
          ListFooterComponent={
            <View>
              <MainTitle title="Woman Fashion" />
              <FlatList
                style={{ marginTop: 12 * calWidth }}
                numColumns={numColumns}
                data={femaleCategories}
                columnWrapperStyle={styles.columnWrapperStyle}
                renderItem={({ item }) => {
                  return (
                    <CategoryItem category={item} style={styles.cateItem} />
                  )
                }}
                keyExtractor={(item, index) => `List category woman ${index}`}
              />
            </View>
              }
        />    
      </View>
      <SafeAreaView />
    </View>
  )
}

const styles = StyleSheet.create({
  cateItem: { 
    // marginHorizontal: 16,
    width: titleSize,
    height: titleSize,
  },

  columnWrapperStyle: { 
    marginBottom: mainPaddingH * 2,
    // justifyContent: 'center',
    // marginHorizontal: 16,
    // alignContent: 'space-around',
    // alignItems: 'space-between',
  },
  container: {
    flex: 1,
  },
  wrapperExplore: {
    flex: 1,
    borderTopColor: Colors.neutralLine,
    borderTopWidth: 1,
    paddingTop: 16 * calWidth,
  },
  cateName: {
    ...TypoGrayphy.heading5,
    paddingHorizontal: mainPaddingH,
    marginBottom: 12 * calWidth,
  },
})
Explore.prototype = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any,
}

export default Explore
