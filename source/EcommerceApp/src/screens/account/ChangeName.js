import React, { useState } from 'react'
import {
  View, StyleSheet, SafeAreaView, TextInput,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import {
  Text,
  Button,
  Header,
} from '../../components'
import {
  calWidth,
  Colors,
  mainPaddingH,
  TypoGrayphy,
} from '../../../assets/styles'
import { userAction } from '../../redux/actions'
import { Helpers } from '../../utils'

const ChangeName = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const handleButtonSave = async () => {
    dispatch(userAction.updateProfileUser({ token: user?.token, fullname: `${lastName} ${firstName}` }, (response) => {
      if (!response?.success) {
        Helpers.showMes('Fail')
        return
      }
      Helpers.showMes('Update cuccess', 'success')
      navigation.goBack()
    }))
  }
  const { navigation, route } = props
  const { name } = route.params
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title="Name" navigation={navigation} />
      <View style={{ flex: 1, paddingHorizontal: mainPaddingH }}>
        <View style={{ marginTop: mainPaddingH }}>
          <Text style={{ ...TypoGrayphy.heading5 }}>First Name</Text>
          <TextInput style={styles.input} placeholder={name} onChangeText={(text) => setFirstName(text)} />
        </View>
        <View style={{ marginTop: 24 * calWidth }}>
          <Text style={{ ...TypoGrayphy.heading5 }}>Last name</Text>
          <TextInput style={styles.input} placeholder="Gold" onChangeText={(text) => setLastName(text)} />
        </View>
      </View>
      <View style={{ paddingHorizontal: mainPaddingH, marginBottom: 40 }}>
        <Button name="Save" handleClick={handleButtonSave} />
      </View>
      <SafeAreaView />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    padding: mainPaddingH,
    borderRadius: 5 * calWidth,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.neutralLine,
    marginTop: 12 * calWidth,
  },
})

export default ChangeName
