import React from 'react'
import {
  View, StyleSheet, TouchableOpacity, SafeAreaView, Image,
} from 'react-native'
import { Text, NotificationMask, Header } from '../../components'
import {
  Colors, calWidth, TypoGrayphy, mainPaddingH,
} from '../../../assets/styles'
import { offer, list, notification } from '../../../assets/images'
import { SCREEN_NAME } from '../../configs'

const NotificationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title={SCREEN_NAME.Notification} navigation={navigation} />
      <TouchableOpacity
        onPress={() => navigation.push(SCREEN_NAME.NotificationOffer)}
      >
        <View style={styles.offer}>
          <View style={styles.notifyRow}>
            <Image source={offer} style={styles.image} resizeMode="contain" />
            <Text style={styles.notifyTitle}>Offer</Text>
          </View>
          <NotificationMask number="2" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(SCREEN_NAME.NotificationFeed)}
      >
        <View style={styles.offer}>
          <View style={styles.notifyRow}>
            <Image source={list} style={styles.image} resizeMode="contain" />

            <Text style={styles.notifyTitle}>Feed</Text>
          </View>
          <NotificationMask number="3" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(SCREEN_NAME.NotificationActivity)}
      >
        <View style={styles.offer}>
          <View style={styles.notifyRow}>
            <Image source={notification} style={styles.image} resizeMode="contain" />

            <Text style={styles.notifyTitle}>Activity</Text>
          </View>
          <NotificationMask number="3" />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  offer: {
    flexDirection: 'row',
    padding: mainPaddingH,
    justifyContent: 'space-between',
  },
  notifyRow: {
    flexDirection: 'row', alignItems: 'center',
  },
  notifyTitle: {
    marginLeft: mainPaddingH,
    ...TypoGrayphy.heading6,
  },
  image: {
    width: 24 * calWidth,
    height: 24 * calWidth,
    tintColor: Colors.primaryBlue,
  },
})
export default NotificationScreen
