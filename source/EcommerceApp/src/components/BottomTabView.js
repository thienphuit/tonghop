import React from 'react'
import {
  SafeAreaView, View, StyleSheet, TouchableOpacity, Image,
} from 'react-native'
import { calWidth, Colors, TypoGrayphy } from '../../assets/styles'
import Text from './Text'
import { TAB_DATA } from '../configs'

const MyTabBar = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options

  if (focusedOptions.tabBarVisible === false) {
    return null
  }

  return (
    <SafeAreaView style={{ backgroundColor: Colors.backgroudWhite }}>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key]
          const label = options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name
          const isFocused = state.index === index
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name)
            }
          }
          return (
            <TouchableOpacity
              onPress={onPress}
              style={styles.button}
              key={route.key}
            >
              <Image
                source={TAB_DATA[index].image}
                style={[styles.image, { tintColor: isFocused ? Colors.primaryBlue : Colors.neutralGrey }]}
                resizeMode="contain"
              />
              <Text style={
                !isFocused
                  ? { ...TypoGrayphy.captionNormalTextRegular, color: Colors.neutralGrey }
                  : { ...TypoGrayphy.captionNormalTextBold, color: Colors.primaryBlue }
              }
              >
                {label}
              </Text>
            </TouchableOpacity>
          )
        })}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopColor: Colors.neutralLine,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  button: {
    flex: 1,
    height: 58 * calWidth,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  image: {
    width: 24 * calWidth,
    height: 24 * calWidth,
    marginBottom: 4 * calWidth,
  },
})

export default MyTabBar
