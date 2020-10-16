import React from 'react'
import {
  View, TouchableOpacity, StyleSheet, Image,
} from 'react-native'
import PropTyles from 'prop-types'
import { bottomIcon } from '../../assets/images'
import {
  calWidth,
  Colors,
  mainPaddingH,
} from '../../assets/styles'
import Text from './Text'

const PickerComponent = (props) => {
  const {
    genders, showView, handleShowList, selectedValue, handleFame,
  } = props
  return (
    <View>
      <TouchableOpacity onPress={handleShowList}>
        <View style={[styles.picker, { borderColor: showView ? Colors.primaryBlue : Colors.neutralLine }]}>
          <Text>{selectedValue}</Text>
          <Image source={bottomIcon} style={{ width: 24 * calWidth, height: 24 * calWidth }} />
        </View>
      </TouchableOpacity>
      {showView ? <View>
        <View style={{
          borderColor: Colors.neutralLine, borderWidth: StyleSheet.hairlineWidth, marginTop: 8 * calWidth, padding: mainPaddingH, borderRadius: 5 * calWidth,
        }}
        >
          {genders.map((item) => {
            return (
              <TouchableOpacity key={item.id} onPress={() => handleFame(item)}>
                <Text style={{ padding: 8, color: item.tilte === selectedValue ? Colors.primaryBlue : 'black' }}>{item.tilte}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
      </View> : <View />}
    </View>
  )
}
const styles = StyleSheet.create({
  picker: {
    paddingHorizontal: mainPaddingH,
    paddingVertical: 12 * calWidth,
    borderRadius: 5 * calWidth,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.neutralLine,
    marginTop: 12 * calWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
PickerComponent.propTyles = {
  genders: PropTyles.array.isRequired,
  showView: PropTyles.bool,

}
export default PickerComponent
