import React from 'react'
import {
  View, StyleSheet, SafeAreaView, ScrollView,
} from 'react-native'
import { Text, SaleOffComponent } from '../../components'
import {
  calWidth,
  Colors,
  mainPaddingH,
  TypoGrayphy,
} from '../../../assets/styles'
import { promotionImage, promotionImage2 } from '../../../assets/images'

const OfferScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.viewHeader}>
        <Text style={styles.labelHeader}>Offer</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.viewBody}>
          <View style={styles.viewCopon}>
            <Text style={styles.labelCupon}>
              Use “MEGSL” Cupon For Get 90%off
            </Text>
          </View>
          <View>
            <SaleOffComponent topic="Super Flash Sale 50% Off" image={promotionImage} time="3600" />
            <SaleOffComponent topic="90% Off Super Mega Sale" image={promotionImage2} content="Special birthday Lafyuu" />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  labelCupon: {
    padding: mainPaddingH,
    ...TypoGrayphy.heading4,
    color: Colors.backgroudWhite,
    width: 212 * calWidth,
  },
  viewCopon: {
    backgroundColor: Colors.primaryBlue,
    borderRadius: 5 * calWidth,
  },
  viewBody: {
    flex: 1,
    paddingHorizontal: mainPaddingH,
    paddingVertical: mainPaddingH,
  },
  labelHeader: { ...TypoGrayphy.heading4, marginLeft: mainPaddingH },
  viewHeader: {
    paddingVertical: mainPaddingH,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.borderColor,
  },
  container: {
    flex: 1,
  },
})

export default OfferScreen
