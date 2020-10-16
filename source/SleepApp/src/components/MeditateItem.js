import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { Colors } from '../../assets/styles'
import Text from './Text'

const MeditateItem = (props) => {
  const { isActive, item, handleActive } = props
  return (
    <TouchableOpacity onPress={() => handleActive(item.id)}>
      <View style={{ marginRight: 20, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{
          width: 65,
          height: 65,
          borderRadius: 25,
          backgroundColor: isActive === true ? Colors.bgButtonPurple : Colors.selection,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}
        >
          <Image source={item.image} />
        </View>
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  )
}
export default MeditateItem
