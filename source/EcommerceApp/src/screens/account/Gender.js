import React, { useState } from 'react'
import {
  View, StyleSheet, SafeAreaView, ScrollView,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import {
  Text, Button, PickerComponent, Header,
} from '../../components'
import {
  calWidth,
  Colors,
  mainPaddingH,
  TypoGrayphy,
} from '../../../assets/styles'
import { SCREEN_NAME } from '../../configs'
import { userAction } from '../../redux/actions'
import { Helpers } from '../../utils'

const listGender = [
  { id: 1, tilte: 'male' },
  { id: 2, tilte: 'female' },
  { id: 3, tilte: 'other' },
]
const Gender = (props) => {
  const [selectedValue, setSelectedValue] = useState('Male')
  const [showView, setShowView] = useState(false)
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const handleButtonSave = () => {
    dispatch(userAction.updateProfileUser({ token: user?.token, gender: selectedValue }, (response) => {
      if (!response?.success) {
        Helpers.showMes('Fail')
        return
      }
      Helpers.showMes('Update cuccess', 'success')
      navigation.goBack()
    }))
  }
  // useEffect(() => {
  //   dispatch(userAction.profileUser({ token: user?.token }, (response) => {
  //     console.tron.log({ response })
  //   }))
  // }, [selectedValue])
  const handleShowList = () => {
    setShowView(!showView)
  }
  const handleFame = (item) => {
    setSelectedValue(item.tilte)
    setShowView(!showView)
  }

  const { navigation, route } = props
  const { gen } = route?.params
  console.log('============================')
  console.log('gender', gen)
  console.log('============================')
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title={SCREEN_NAME.Gender} navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.viewWrapper}>
          <View style={styles.viewChoose}>
            <Text style={styles.label}>Choose gender</Text>
            <PickerComponent
              genders={listGender}
              showView={showView}
              handleFame={handleFame}
              handleShowList={handleShowList}
              selectedValue={selectedValue}
            />
          </View>
        </View>
      </ScrollView>
      <View style={{ paddingHorizontal: mainPaddingH }}>
        <Button name="Save" handleClick={handleButtonSave} />
      </View>
      <SafeAreaView />

    </View>
  )
}

const styles = StyleSheet.create({
  viewChoose: { marginTop: mainPaddingH },
  label: { ...TypoGrayphy.heading5 },
  viewWrapper: {
    flex: 1,
    paddingHorizontal: mainPaddingH,
  },
  container: {
    flex: 1,
  },
  picker: {
    paddingHorizontal: mainPaddingH,
    paddingVertical: 12,
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.neutralLine,
    marginTop: 12 * calWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export default Gender
