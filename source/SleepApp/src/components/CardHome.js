import React from 'react'
import {
  View, StyleSheet, Image, TouchableOpacity, 
} from 'react-native'
import { imgHeartHome } from '../../assets/images'
import { calRepository, Colors, Fonts } from '../../assets/styles'
import Text from './Text'

const CardTopic = ({
  color, background, iconImage, onDetail, 
}) => {
  return (
    <View style={[styles.container, { backgroundColor: background || Colors.bgButtonPurple }]}>
      <View>
        <Image
          source={iconImage || imgHeartHome}
          style={{
            width: 110 * calRepository, height: 105 * calRepository, position: 'absolute', right: 0, borderTopRightRadius: 10 * calRepository,
          }}
          resizeMode="contain"
        />
      </View>
      <View style={{ marginTop: 30 * calRepository }}>
        <Text style={{
          color,
          ...Fonts.bold,
          fontSize: 18,
          lineHeight: 19,
          marginBottom: 10 * calRepository,
        }}
        >
          Basic
        </Text>
        <Text style={{
          color,
        }}
        >
          Cource
        </Text>
      </View>
      <View style={{
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 15, marginBottom: 15,
      }}
      >
        <Text style={{
          color,
        }}
        >
          3-10min
        </Text>
        <TouchableOpacity onPress={() => onDetail()}>
          <View
            style={[styles.buttonStart, {
              backgroundColor: 
              color && color ? color : Colors.primaryBlackText, 
            }]}
          >
            <Text style={{
              color: color && color ? Colors.primaryBlackText : Colors.background,
            }}
            >
              Start
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: 177 * calRepository,
    height: 210 * calRepository,
    borderRadius: 10 * calRepository,
    marginRight: 20 * calRepository,
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  buttonStart: {
    
    width: 70,
    height: 35,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
export default CardTopic
