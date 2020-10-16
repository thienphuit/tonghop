import React from 'react'
import {
  View, Text, TouchableOpacity, Image, SafeAreaView,
} from 'react-native'
import { TAB_DATA } from '../configs'
import { Colors, calRepository } from '../../assets/styles'

const MyTabBar = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options

  if (focusedOptions.tabBarVisible === false) {
    return null
  }

  return (
    <SafeAreaView>
      <View style={{
        flexDirection: 'row',
        // borderTopWidth: StyleSheet.hairlineWidth,
        backgroundColor: Colors.background,
        // borderTopColor: Colors.primaryGrey,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        elevation: 5,

      }}
      >
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
          // const onLongPress = () => {
          //   navigation.emit({
          //     type: 'tabLongPress',
          //     target: route.key,
          //   })
          // }
          return (
            <TouchableOpacity
              onPress={onPress}
              style={{
                flex: 1,
                // height: 66,
                alignItems: 'center',
                justifyContent: 'flex-end',
                marginBottom: 8 * calRepository,
              }}
            // key={route.key}
            >
              <View style={{
                width: 46 * calRepository,
                height: 46 * calRepository,
                borderRadius: 18 * calRepository,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: !isFocused ? Colors.background : Colors.bgButtonPurple,
                marginTop: 10 * calRepository,
                marginBottom: 5 * calRepository,
              }}
              >
                <Image
                  source={TAB_DATA[index].image}
                  style={{
                    width: 24 * calRepository,
                    height: 24 * calRepository,
                    // marginBottom: 4,
                    tintColor: !isFocused ? Colors.primaryGrey : Colors.background,
                  }}
                  resizeMode="contain"
                />
              </View>
              <Text style={
                !isFocused
                  ? { color: Colors.primaryGrey }
                  : { color: Colors.bgButtonPurple }
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

export default MyTabBar
