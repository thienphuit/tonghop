import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import {
  back, refresh, male, female, butonBg,
} from './assets/images'

const { width, height } = Dimensions.get('window')
const calWidth = width / 375
const Fonts = {
  sfProText: {
    fontFamily: 'SFProText-Regular',
  },
  sfProTextBold: {
    fontFamily: 'SFProText-Bold',
  },
}

const App = () => {
  const [heightValue, setHeightValue] = useState('170')
  const [weightValue, setWeightValue] = useState('60')
  const [resultValue, setResultValue] = useState('')
  const [isShowModal, setIsShowModal] = useState(false)
  const handleExitModel = () => {
    setIsShowModal(false)
  }

  const handleHeightValue = (text) => {
    setHeightValue(text)
  }

  const handleWeightValue = (text) => {
    setWeightValue(text)
  }
  const handleSubmitBMI = () => {
    // const { weightValue, heightValue, isShowModal } = this.state
    const result = weightValue / (heightValue * 0.01) ** 2
    setResultValue(result.toFixed(1))
    setIsShowModal(true)
  }

  const handleReFresh = () => {
    setHeightValue('0')
    setWeightValue('0')
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <View>
              <View style={styles.topBar}>
                <View>
                  <View style={styles.back}>
                    <Image
                      source={back}
                      style={styles.bgBack}
                    />
                    <Text style={styles.titleAppBar}>
                      Weight Diary
                    </Text>
                  </View>
                  <Text style={styles.titleBMI}>BMI Calculator</Text>
                </View>
                <TouchableOpacity onPress={handleReFresh}>
                  <Image source={refresh} style={styles.imgRefresh} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{
              marginTop: 29 * calWidth, flexDirection: 'row', justifyContent: 'space-between',
            }}
            >
              <View style={styles.male}>
                <Image source={male} style={styles.imgMale} resizeMode="contain" />
                <Text style={styles.titleMale}>Male</Text>
              </View>
              <View style={styles.female}>
                <Image source={female} style={styles.imgFemale} resizeMode="contain" />
                <Text style={styles.titleFemale}>
                  Female
                </Text>
              </View>
            </View>
            <View style={styles.bmi}>
              <View style={{ width: 144 * calWidth, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                  <Text style={styles.quantity}>
                    cm
                  </Text>
                  <Text style={styles.unit}>ft</Text>
                </View>
              </View>
              <View style={styles.result}>
                <TextInput
                  placeholder="0"
                  placeholderTextColor="#72909D"
                  value={heightValue}
                  style={styles.input}
                  onChangeText={handleHeightValue}
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View style={styles.bmi}>
              <View style={{ width: 144 * calWidth, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                  <Text style={styles.quantity}>
                    kg
                  </Text>
                  <Text style={styles.unit}>lb</Text>
                </View>
              </View>
              <View style={styles.result}>
                <TextInput
                  placeholder="0"
                  placeholderTextColor="#72909D"
                  style={styles.input}
                  value={weightValue}
                  onChangeText={handleWeightValue}
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View style={styles.bmi}>
              <View style={{ width: 144 * calWidth, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                  <Text style={styles.quantity}>
                    goal
                  </Text>
                </View>
              </View>
              <View style={styles.result}>
                <TextInput
                  placeholder="0"
                  placeholderTextColor="#72909D"
                  style={styles.input}
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View style={styles.bmi}>
              <View style={{ width: 144 * calWidth, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                  <Text style={styles.quantity}>
                    age
                  </Text>

                </View>
              </View>
              <View style={styles.result}>
                <TextInput
                  placeholder="0"
                  placeholderTextColor="#72909D"
                  style={styles.input}
                  keyboardType="numeric"
                />
              </View>
            </View>
            <TouchableOpacity onPress={handleSubmitBMI}>
              <View style={styles.submitBMI}>
                <Image source={butonBg} />
                <Text style={styles.titleSubmit}>
                  Calculate your BMI
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <Modal
            animationType="slide"
            transparent
            visible={isShowModal}
          >
            <View style={{
              flex: 1,
              backgroundColor: 'rgba(50, 65, 72,1)',
              opacity: 0.9,
            }}
            >
              <View>
                <TouchableOpacity onPress={handleExitModel}>
                  <View style={styles.exitModel}>
                    <Text style={{ fontSize: 20 * calWidth, color: '#fff', ...Fonts.sfProText }}>X</Text>
                  </View>
                </TouchableOpacity>
                <View style={{
                  justifyContent: 'center', alignItems: 'center', marginTop: height / 2 - 50,
                }}
                >
                  <View style={styles.resultBMI}>
                    <Text style={{ ...Fonts.sfProTextBold, fontSize: 36 * calWidth, color: '#fff' }}>Your BMI</Text>
                    <Text style={{ ...Fonts.sfProTextBold, fontSize: 72 * calWidth, color: '#fff' }}>{resultValue}</Text>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  resultBMI: {
    width: 250 * calWidth,
    height: 250 * calWidth,
    borderRadius: 20 * calWidth,
    backgroundColor: '#72909D',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  exitModel: {
    width: 50 * calWidth,
    height: 50 * calWidth,
    marginTop: 47 * calWidth,
    marginLeft: 296 * calWidth,
    borderRadius: 10 * calWidth,
    backgroundColor: '#72909D',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  container: {
    paddingHorizontal: 30, flex: 1, backgroundColor: '#324148',
  },
  topBar: {
    flexDirection: 'row', justifyContent: 'space-between', marginTop: 29 * calWidth,
  },
  back: {
    flexDirection: 'row', marginBottom: 15 * calWidth, alignItems: 'center',
  },
  bgBack: {
    width: 8 * calWidth, height: 15 * calWidth,
  },
  titleAppBar: {
    ...Fonts.sfProText, fontSize: 16 * calWidth, color: '#729090', marginLeft: 24 * calWidth,
  },
  titleBMI: {
    ...Fonts.sfProText, fontSize: 26 * calWidth, color: '#E0F2F1',
  },
  imgRefresh: {
    width: 48 * calWidth, height: 48 * calWidth,
  },
  male: {
    width: 144 * calWidth, height: 144 * calWidth, borderRadius: 10 * calWidth, backgroundColor: 'rgba(114, 144, 157, 0.09)', justifyContent: 'center', alignItems: 'center',
  },
  imgMale: {
    width: 38 * calWidth, height: 37 * calWidth,
  },
  titleMale: {
    marginTop: 16, fontSize: 18, color: '#72909D',
  },
  female: {
    width: 144 * calWidth, height: 144 * calWidth, borderRadius: 10 * calWidth, backgroundColor: 'rgba(114, 144, 157, 1)', justifyContent: 'center', alignItems: 'center',
  },
  imgFemale: {
    width: 46 * calWidth, height: 45 * calWidth,
  },
  titleFemale: {
    marginTop: 16 * calWidth, fontSize: 18 * calWidth, color: '#fff', ...Fonts.sfProTextBold,
  },
  bmi: {
    flexDirection: 'row',
    paddingTop: 32 * calWidth,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantity: {
    marginRight: 8 * calWidth, color: '#E0F2F1', fontSize: 14 * calWidth, ...Fonts.sfProTextBold,
  },
  unit: {
    fontSize: 14 * calWidth, ...Fonts.sfProText, color: '#72909D',
  },
  result: {
    width: 144 * calWidth,
    backgroundColor: '#2F3F4B',
    borderRadius: 36 * calWidth,
    justifyContent: 'center',
    height: 72 * calWidth,
    alignItems: 'center',
  },
  input: {
    color: '#72909D',
    ...Fonts.sfProTextBold,
    fontSize: 36 / 375 * width,
  },
  submitBMI: {
    width: 312 * calWidth, height: 54 * calWidth, marginVertical: 40 * calWidth, borderRadius: 27 * calWidth, justifyContent: 'center', alignItems: 'center',
  },
  titleSubmit: {
    position: 'absolute',
    ...Fonts.sfProTextBold,
    color: '#E0F2F1',
    fontSize: 18 * calWidth,
  },
  
})

export default App
