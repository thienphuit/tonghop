import React, { useState } from 'react'
import {
  View, StyleSheet, SafeAreaView, Alert,
} from 'react-native'
import { TextInput, ScrollView } from 'react-native-gesture-handler'
import {
  Text, Button, PickerComponent, Header,
} from '../../components'
import {
  calWidth,
  Colors,
  mainPaddingH,
  TypoGrayphy,
} from '../../../assets/styles'

const listPicker = [
  { id: 1, tilte: 'United States' },
  { id: 2, tilte: 'United Kingdom' },
  { id: 3, tilte: 'Afghanistan' },
  { id: 4, tilte: 'Albania' },
  { id: 5, tilte: 'American Samoa' },
]
const Address = ({ navigation }) => {
  const handleButtonSave = () => {
    Alert.alert('Save success')
  }
  const [selectedValue, setSelectedValue] = useState(listPicker[0].tilte)
  const [showView, setShowView] = useState(false)

  const handleShowList = () => {
    setShowView(!showView)
  }
  const handleFame = (item) => {
    setSelectedValue(item.tilte)
    setShowView(!showView)
  }
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title="Address" navigation={navigation} />
      <ScrollView>
        <View style={styles.viewWrapper}>
          <View style={styles.viewCountry}>
            <Text style={styles.title}>Country or region</Text>
            <PickerComponent
              genders={listPicker}
              handleShowList={handleShowList}
              selectedValue={selectedValue}
              showView={showView}
              handleFame={handleFame}
            />
          </View>
          <View style={styles.viewTitle}>
            <Text style={styles.title}>First name</Text>
            <TextInput style={styles.input} placeholder="Gold" />
          </View>
          <View style={styles.viewTitle}>
            <Text style={styles.title}>Last name</Text>
            <TextInput style={styles.input} placeholder="Gold" />
          </View>
          <View style={styles.viewTitle}>
            <Text style={styles.title}>Street Address</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.viewTitle}>
            <Text style={styles.title}>Street Address 2 (Optional)</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.viewTitle}>
            <Text style={styles.title}>City</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.viewTitle}>
            <Text style={styles.title}>State/Province/Region</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.viewTitle}>
            <Text style={styles.title}>Zip Code</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.viewnumber}>
            <Text style={styles.title}>Number Phone</Text>
            <TextInput style={styles.input} />
          </View>
        </View>
      </ScrollView>
      <View style={{ marginBottom: 20, marginHorizontal: mainPaddingH }}>
        <Button name="Save" handleClick={handleButtonSave} />
      </View>
      <SafeAreaView />
    </View>
  )
}

const styles = StyleSheet.create({
  viewCountry: { marginTop: mainPaddingH },
  viewWrapper: { flex: 1, paddingHorizontal: mainPaddingH },
  viewnumber: { marginVertical: 24 * calWidth },
  viewTitle: { marginTop: 24 * calWidth },
  title: { ...TypoGrayphy.heading5 },
  container: {
    flex: 1,
  },
  input: {
    padding: mainPaddingH,
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.neutralLine,
    marginTop: 12 * calWidth,
  },
})

export default Address
