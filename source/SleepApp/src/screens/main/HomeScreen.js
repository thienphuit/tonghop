import React, { useEffect } from 'react'
import {
  View, StyleSheet, Image, ImageBackground, FlatList, ScrollView,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { Text, CardHome } from '../../components'
import { calRepository, Colors, Fonts } from '../../../assets/styles'
import {
  logo, iconMusic, pause, maskDaily, focus,
} from '../../../assets/images'
import { SCREEN_NAME } from '../../configs'
import { playlistAction } from '../../redux/actions'

const listData = ['1', '2', '3']
const token = 'BQCwyTlhajHRnp8wo4vWJ_i01ixLfmE5dND9BTNvjaIxoulQCT4iag7ADMiCxaCGloXtdCLavU8WLf2enxFE2f8iST38ZEEm0CQIf0qzRD447JPy8tjKDAdWtY7XvlIHasfSS9YDmS8ok4hJvVkaNMObdNuyBKfmSbAfo4vHFBaBmC3VERrNLFdGwto02FxW_KbAfAkrgnPHdDYLawz2sSSEwb81nikDIurghzLay3ivYKIhh7s_E9OI7gNoBqeduBkViPz_qX2a7HifiZxJn6luL6xiI93Q6Ck'
const HomeScreen = (props) => {
  const { navigation } = props
  const onDetail = () => {
    navigation.navigate(SCREEN_NAME.CourceDetails)
  }
  const dispatch = useDispatch()
  const handleGetData = async () => {
    dispatch(playlistAction.getPlayList({
      token,
    }, (response) => {
      console.tron.log({ response })
      console.log('============================')
      console.log('resss', response.data)
      console.log('============================')
    }))
  }
  useEffect(() => {
    handleGetData()
  }, [])
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={{
          alignItems: 'center',
          marginVertical: 50 * calRepository, 
        }}
        >
          <View style={styles.wraplogo}>
            <Text style={styles.titleLogo}>
              Silent
            </Text>
            <Image
              source={logo}
              style={styles.logo}
            />
            <Text style={styles.titleLogo}>
              Moon
            </Text>
          </View>
        </View>
        <View>
          <View>
            <Text style={{
              ...Fonts.bold,
              fontSize: 28,
              lineHeight: 30,
              color: Colors.primaryBlackText,
              marginBottom: 10 * calRepository,
            }}
            >
              Good morning, Afsar
            </Text>
            <Text>We wish you have a good day</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 30 * calRepository }}>
            <CardHome color={Colors.background} topic="Basic" content="Course" onDetail={onDetail} />
            <CardHome background={Colors.primaryOrange} iconImage={iconMusic} />
          </View>
          <ImageBackground
            source={maskDaily}
            style={styles.backgroundImage}
          >
            <View>
              <Text style={{ color: Colors.background, ...Fonts.bold, marginBottom: 5 }}>Daily Thought</Text>
              <Text style={{ color: Colors.background }}>Meditation-3-10 min</Text>
            </View>
            <Image
              source={pause}
              style={{
                width: 40 * calRepository,
                height: 40 * calRepository,
              }}
              resizeMode="contain"
            />
          </ImageBackground>
          <View style={{ marginTop: 40, marginBottom: 20 }}>
            <Text style={{
              ...Fonts.bold,
              fontSize: 24,
              lineHeight: 26,
              color: Colors.primaryBlackText,
              marginBottom: 10 * calRepository,
            }}
            >
              Recomend for you
            </Text>
          </View>
          <View style={{ flex: 1, marginBottom: 20 }}>
            <FlatList
              data={listData}
              horizontal
              renderItem={({ item }) => {
                return (
                  <View style={{
                    width: 162 * calRepository,
                    marginRight: 10 * calRepository, 
                  }}
                  >
                    <View style={{
                      backgroundColor: Colors.bgFocus,
                      borderRadius: 10 * calRepository,
                      width: 162 * calRepository,
                    }}
                    >
                      <Image source={focus} style={{ width: 159 * calRepository }} resizeMode="cover" />
                    </View>
                    <View style={{ paddingLeft: 5 * calRepository }}>
                      <Text style={{
                        ...Fonts.bold,
                        fontSize: 18,
                        lineHeight: 19,
                        color: Colors.primaryBlackText,
                        paddingTop: 10 * calRepository,
                        paddingBottom: 6 * calRepository,
                      }}
                      >
                        Focus
                      </Text>
                      <Text>MEDITATION * 3-10 MIN</Text>
                    </View>
                  </View>
                )
              }}
              keyExtractor={(item) => `list recommend ${item}`}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  backgroundImage: {
    paddingHorizontal: 30,
    paddingVertical: 27,
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primaryBlackText,
  },
  wraplogo: {
    flexDirection: 'row', alignItems: 'center',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20 * calRepository,
    backgroundColor: Colors.background,
  },
  logo: {
    width: 30 * calRepository,
    height: 30 * calRepository,
    marginHorizontal: 10 * calRepository,
  },
})
export default HomeScreen
