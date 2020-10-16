import React, { useState } from 'react'
import {
  View, StyleSheet, SafeAreaView, FlatList, Image, ImageBackground, Dimensions, ScrollView,
} from 'react-native'
import { calRepository, Colors, Fonts } from '../../../assets/styles'
import { MeditateItem, Text } from '../../components'
import {
  anxious, kids, my, sleepIcon, allIcon, maskMeditate, pause, daycalm, release, frameMeditate, treeMeditate,
} from '../../../assets/images'

const { width } = Dimensions.get('window')
const listEmozi = [
  { id: 1, image: allIcon, title: 'All' },
  { id: 2, image: my, title: 'My' },
  { id: 3, image: anxious, title: 'Anxious' },
  { id: 4, image: sleepIcon, title: 'Sleep' },
  { id: 5, image: kids, title: 'Kids' },
]
const listImage = [
  { image: daycalm, size: 210 / 176, title: '7 day of calm' },
  { image: release, size: 167 / 176, title: 'Meditate' },
  { image: frameMeditate, size: 210 / 176, title: '' },
  { image: treeMeditate, size: 167 / 176, title: '7 day of calm' },
]
const MeditateScreen = () => {
  const [isActive, setIsActive] = useState(0)
  const handleActive = (actvive) => {
    setIsActive(actvive)
  }
  // const renderImage = ({ image, id, columns = 2 }) => {
  //   // const sizes = Image.resolveAssetSource(image)
  //   // const fullWidth = width - 20 * 2.5
  //   // const resize = (sizes.width * 100) / fullWidth
  //   // const imgWidth = resize > 75 ? fullWidth : sizes.width * 1
  //   const COLUMN_WIDTH = width / columns
  //   const IMAGE_SPACING = COLUMN_WIDTH * 0.01
  //   const COL_WIDTH = width * 0.5
  //   return (
  //     <View>
  //       <Image
  //         source={image}
  //         style={[styles.image, { minWidth: COL_WIDTH, maxWidth: COLUMN_WIDTH }]}
  //       />
  //     </View>
  //   )
  // }
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <SafeAreaView />
        <View style={styles.titleHeader}>
          <Text style={styles.title}>Meditate</Text>
          <Text style={styles.contentTitle}>we can learn how to recognize when our minds are doing their normal everyday acrobatics.</Text>
        </View>
        <View style={{ marginLeft: 20 }}>
          <FlatList
            data={listEmozi}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item }) => <MeditateItem isActive={item.id === isActive} item={item} handleActive={handleActive} />}
          />
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <ImageBackground
            style={styles.imageBackground}
            source={maskMeditate}
          >
            <View>
              <Text>Dayly Calm</Text>
              <Text>APR 30 * PAUSE PRACTICE</Text>
            </View>
            <Image
              source={pause}
              style={styles.imagePlay}
              resizeMode="contain"
            />
          </ImageBackground>
          <ScrollView>
            <View style={{ flex: 1 }}>
              <View style={{
                flexDirection: 'row', 
                justifyContent: 'space-between', 
              }}
              >
                <View>
                  {listImage.filter((_, i) => i % 2 === 0)
                    .map((item) => {
                      return (
                        <View style={{ marginBottom: 16 * calRepository }}>
                          <Image
                            source={item.image}
                            resizeMode="cover"
                            style={{
                              width: 176 * calRepository,
                              height: item.size * 176 * calRepository,
                              borderRadius: 10 * calRepository, 
                            }}
                          />
                          <View style={{
                            justifyContent: 'center',
                            position: 'absolute',
                            right: 0,
                            left: 0,
                            bottom: 20,
                          }}
                          >
                            <Text style={{
                              color: Colors.background,
                              ...Fonts.bold,
                              textAlign: 'center',
                              fontSize: 18,
                              lineHeight: 19,
                            }}
                            >
                              {item.title}
                            </Text>
                          </View>
                        </View>
                      )
                    })}
                </View>
                <View>
                  {listImage.filter((_, i) => i % 2 !== 0)
                    .map((item) => {
                      return (
                        <View style={{ marginBottom: 16 * calRepository }}>
                          <Image
                            source={item.image}
                            resizeMode="cover"
                            style={{
                              width: 176 * calRepository,
                              height: item.size * 176 * calRepository,
                              borderRadius: 10 * calRepository, 
                            }}
                          />
                        </View>
                      )
                    })}
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  imagePlay: {
    width: 40 * calRepository,
    height: 40 * calRepository,
  },
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  titleHeader: {
    paddingHorizontal: 39 * calRepository,
    marginTop: 50 * calRepository,
    marginBottom: 30,
  },
  title: {
    textAlign: 'center',
    marginBottom: 15 * calRepository,
    fontSize: 28,
    lineHeight: 30,
    ...Fonts.bold,
    color: Colors.primaryBlackText,
  },
  contentTitle: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 22,
  },
  image: {
    minHeight: 170,
    maxHeight: 210,
    maxWidth: width - 20 * 2.5,
    width: 175,
    // maxHeight: 210,
    marginBottom: 20,
    borderRadius: 4,
  },
  imageBackground: {
    marginTop: 30,
    marginBottom: 20,
    backgroundColor: Colors.selectionMeditate,
    borderRadius: 10,
    height: 95,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
})
export default MeditateScreen
