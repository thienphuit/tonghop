import React, { useState } from 'react'
import {
  View, StyleSheet, Image, SafeAreaView, Dimensions, ScrollView, TouchableOpacity, FlatList,
} from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { ItemSong, Text } from '../components'
import {
  love, down, 
  backgroundCource, backIcon, pinkHeart,
  phone,
} from '../../assets/images'
import { Colors, calRepository, Fonts } from '../../assets/styles'
import { SCREEN_NAME } from '../configs'

const listItem = ['1', '2', '3']
const { width } = Dimensions.get('window')
const { initLayout } = width

const CourceDetails = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const FeMaleVoice = () => {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    )
  }
  const MaleVoice = () => {
    const [play, setPlay] = useState('')
    const handlePlaySong = (active) => {
      setPlay(active)
      navigation.navigate(SCREEN_NAME.PlayScreenList)
    }
    return (
      <View style={{ marginTop: 20 * calRepository, marginHorizontal: 20 * calRepository }}>
        <FlatList 
          data={listItem}
          renderItem={({ item }) => <ItemSong isPlay={item === play} item={item} handlePlaySong={handlePlaySong} />}
          keyExtractor={(item, index) => `${index}`}
        />
        
      </View>
    )
  }
  const renderScene = SceneMap({
    first: MaleVoice,
    second: FeMaleVoice,
  })
  const renderTabBar = (props) => (
    <TabBar
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      style={{ backgroundColor: '#F2f2f2', width: '100%' }}
      indicatorStyle={{
        backgroundColor: Colors.bgButtonPurple,
        marginLeft: 40,
        width: 45,
      }}
      tabStyle={styles.tab}
      renderLabel={({ route, focused }) => (
        <Text style={[styles.tabBarLabel, { color: focused ? Colors.bgButtonPurple : Colors.primaryGrey }]}>
          {route.title}
        </Text>
      )}
    />
  )
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <SafeAreaView />
        <Image source={backgroundCource} resizeMode="cover" style={{ height: 290, width }} />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.circle}>
              <Image source={backIcon} style={{ width: 13, height: 13 }} resizeMode="contain" />
            </View>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.circle, { backgroundColor: Colors.primaryGrey, marginRight: 15 }]}>
              <Image source={love} style={{ width: 13, height: 13 }} resizeMode="contain" />
            </View>
            <View style={[styles.circle, { backgroundColor: Colors.primaryGrey }]}>
              <Image source={down} style={{ width: 13, height: 13 }} resizeMode="contain" />
            </View>
          </View>
        </View>
        <View style={{ marginTop: 30, marginLeft: 20, flex: 1 }}>
          <Text style={styles.title}>Happy Morning</Text>
          <Text style={{ marginVertical: 16 }}>COURSE</Text>
          <Text style={styles.description}>Ease the mind into a restful night’s sleep with these deep, amblent tones.</Text>
          <View style={{
            marginVertical: 30,
            flexDirection: 'row',
          }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={pinkHeart}
                style={styles.image}
                resizeMode="contain"
              />
              <Text>24.234 Favorits</Text>
            </View>
            <View style={{
              flexDirection: 'row',
              marginLeft: 50,
              alignItems: 'center', 
            }}
            >
              <Image
                source={phone}
                style={styles.image}
                resizeMode="contain"
              />
              <Text>34.234 Lestening</Text>
            </View>
          </View>
          <Text style={styles.titlePick}>Pick a Nnrrator</Text>
        </View>
        <View>
          <TabView
            navigationState={{
              index: currentIndex,
              routes:
            [
              { key: 'first', title: 'MALE VOICE' },
              { key: 'second', title: 'FEMALE VOICE' },
            ],
            }}
            renderTabBar={renderTabBar}
            renderScene={renderScene}
            onIndexChange={setCurrentIndex}
            initialLayout={initLayout}
          />
        </View>
      </View>
      <SafeAreaView />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  titleSong: {
    ...Fonts.bold, 
    color: Colors.primaryBlackText, 
    fontSize: 16,
    lineHeight: 17,
    marginBottom: 6,
  },
  wrapperViewPause: {
    width: 40 * calRepository,
    height: 40 * calRepository, 
    backgroundColor: Colors.bgButtonPurple,
    borderRadius: 20 * calRepository, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  titlePick: {
    ...Fonts.bold,
    color: Colors.primaryBlackText,
    fontSize: 20,
    lineHeight: 22,

  },
  image: {
    width: 18, height: 16, marginRight: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 23,
  },
  container: {
    flex: 1,
  },
  circle: {
    width: 50,
    height: 50, 
    backgroundColor: Colors.background,
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius: 25,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    
    justifyContent: 'space-between',
    // : 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    marginTop: 50 * calRepository,
  },
  title: {
    ...Fonts.bold,
    fontSize: 34,
    lineHeight: 37,
    color: Colors.primaryBlackText,
    
  },
  tabBarLabel: {
    color: Colors.bgButtonPurple,
    fontSize: 16,
    lineHeight: 17,
  },
  tab: {
    marginRight: 50,
    // width: '100%',
    flexDirection: 'row',
  },
})
export default CourceDetails
