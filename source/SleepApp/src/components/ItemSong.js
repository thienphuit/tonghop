import React from 'react'
import {
  View, StyleSheet, Image, TouchableOpacity, 
} from 'react-native'
import { iconPause } from '../../assets/images'
import { calRepository, Colors, Fonts } from '../../assets/styles'
import Text from './Text'

const ItemSong = ({ handlePlaySong, isPlay, item }) => {
  return (
    <View style={{
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: Colors.primaryGrey,
      paddingVertical: 20 * calRepository, 
    }}
    >
      <TouchableOpacity onPress={() => handlePlaySong(item)}>
        <View style={{ 
          flexDirection: 'row', 
          alignItems: 'center', 
        }}
        >
          <View style={[styles.wrapperViewPause, {
            backgroundColor: 
            isPlay ? Colors.bgButtonPurple : Colors.background,
            borderWidth: !isPlay && StyleSheet.hairlineWidth,
            borderColor: !isPlay && Colors.primaryGrey, 
          }]}
          >
            <Image
              source={iconPause}
              resizeMode="contain"
              style={{
                width: 11 * calRepository,
                height: 12 * calRepository,
                tintColor: !isPlay ? Colors.primaryGrey : null, 
              }}
            />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.titleSong}>
              Focus Attention
            </Text>
            <Text>10 MIN</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  titleSong: {
    ...Fonts.bold, 
    color: Colors.primaryBlackText, 
    fontSize: 16,
    lineHeight: 17,
    marginBottom: 6,
  },
  wrapperViewPause: {
    width: 40 * calRepository,
    height: 40 * calRepository, 
    // backgroundColor: Colors.bgButtonPurple,
    borderRadius: 20 * calRepository, 
    justifyContent: 'center',
    alignItems: 'center',
  },
})
export default ItemSong
