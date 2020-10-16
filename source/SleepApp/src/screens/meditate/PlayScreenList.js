import React, { useEffect } from 'react'
import {
  StyleSheet, View, SafeAreaView, Image, TouchableOpacity, Animated, Easing,
} from 'react-native'
import TrackPlayer, { usePlaybackState, useTrackPlayerProgress } from 'react-native-track-player'
import {
  bgmusicTop, deleteIcon, love, down, musicTopRight, bgMusicBottom, bgMusicBottomRight,
} from '../../../assets/images'
import { Text, Player } from '../../components'
import { Colors, Fonts } from '../../../assets/styles'

import playlistData from './Playlist.json'
// import localTrack from '../resources/pure.m4a'

const PlaylistScreen = ({ navigation }) => {
  const playbackState = usePlaybackState()

  useEffect(() => {
    setup()
    // togglePlayback()
    // TrackPlayer.play()
    start()
  }, [])
  const start = async () => {
    // Set up the player
    await TrackPlayer.setupPlayer()

    // Add a track to the queue
    await TrackPlayer.add({
      id: '1111',
      url: 'https://drive.google.com/uc?export=download&id=1AjPwylDJgR8DOnmJWeRgZzjsohi-7ekj',
      title: 'Longing',
      artist: 'David Chavez',
      artwork: 'https://i.picsum.photos/id/100/200/200.jpg',
      duration: 143,
    })

    // Start playing it
    await TrackPlayer.play()
  }

  async function setup() {
    await TrackPlayer.setupPlayer({})
    await TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        TrackPlayer.CAPABILITY_STOP,
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
      ],
    })
  }

  async function togglePlayback() {
    const currentTrack = await TrackPlayer.getCurrentTrack()
    console.log('============================')
    console.log('cureentrack', currentTrack)
    console.log('============================')
    if (currentTrack == null) {
      await TrackPlayer.reset()
      // await TrackPlayer.add(playlistData)
      // await TrackPlayer.add({
      //   id: '1111',
      //   url: 'https://drive.google.com/uc?export=download&id=1AjPwylDJgR8DOnmJWeRgZzjsohi-7ekj',
      //   title: 'Longing',
      //   artist: 'David Chavez',
      //   artwork: 'https://i.picsum.photos/id/100/200/200.jpg',
      //   duration: 143,
      // })
      await TrackPlayer.play()
    } else if (playbackState === TrackPlayer.STATE_PAUSED) {
      await TrackPlayer.play()
    } else {
      await TrackPlayer.pause()
    }
  }

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Image
        source={bgmusicTop} 
        resizeMode="contain"
        style={{ position: 'absolute', left: 0 }}
      />
      <Image
        source={musicTopRight} 
        resizeMode="contain"
        style={{ position: 'absolute', right: 0 }}
      />
      <Image
        source={bgMusicBottom} 
        resizeMode="contain"
        style={{ position: 'absolute', left: 0, bottom: 0 }}
      />
      <Image
        source={bgMusicBottomRight} 
        resizeMode="contain"
        style={{ position: 'absolute', right: 0, bottom: 0 }}
      />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.circle}>
            <Image source={deleteIcon} style={styles.imageIcon} resizeMode="contain" />
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>
          <View style={[styles.circle, { backgroundColor: Colors.primaryGrey, marginRight: 15 }]}>
            <Image source={love} style={styles.imageIcon} resizeMode="contain" />
          </View>
          <View style={[styles.circle, { backgroundColor: Colors.primaryGrey }]}>
            <Image source={down} style={styles.imageIcon} resizeMode="contain" />
          </View>
        </View>
      </View>
      <View style={{
        justifyContent: 'center', alignItems: 'center', flex: 1,
      }}
      >
        <Text style={styles.description}>
          Focus Attention
        </Text>
        <Text>7 DAYS OF CALM</Text>
        <Player
          onNext={skipToNext}
          style={styles.player}
          onPrevious={skipToPrevious}
          onTogglePlayback={togglePlayback}
        />
      </View>
    </View>
  )
}

PlaylistScreen.navigationOptions = {
  title: 'Playlist Example',
}

// function getStateName(state) {
//   switch (state) {
//     case TrackPlayer.STATE_NONE:
//       return 'None'
//     case TrackPlayer.STATE_PLAYING:
//       return 'Playing'
//     case TrackPlayer.STATE_PAUSED:
//       return 'Paused'
//     case TrackPlayer.STATE_STOPPED:
//       return 'Stopped'
//     case TrackPlayer.STATE_BUFFERING:
//       return 'Buffering'
//   }
// }

async function skipToNext() {
  try {
    await TrackPlayer.skipToNext()
  } catch (_) {
    console.log('Erro')
  }
}

async function skipToPrevious() {
  try {
    await TrackPlayer.skipToPrevious()
  } catch (_) {
    console.log('Erro')
  }
}
export default PlaylistScreen

const styles = StyleSheet.create({
  imageIcon: {
    width: 13, height: 13, 
  },
  container: {
    flex: 1,
    backgroundColor: Colors.bgMusic,
  },
  description: {
    textAlign: 'center',
    ...Fonts.bold,
    fontSize: 34,
    lineHeight: 37,
    color: Colors.primaryBlackText,
  },
  player: {
    marginTop: 40,
  },
  state: {
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 50,
    justifyContent: 'space-between',
  },
  circle: {
    width: 50,
    height: 50, 
    backgroundColor: Colors.background,
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius: 25,
  },
})
