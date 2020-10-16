import React, { useState, useEffect } from 'react'
import {
  View, Image, Text, StyleSheet, TouchableOpacity, Animated, Easing,
} from 'react-native'
import TrackPlayer, {
  useTrackPlayerProgress,
  usePlaybackState,
  useTrackPlayerEvents,
  STATE_PLAYING,
} from 'react-native-track-player'
import moment from 'moment'
import {
  next, previous, iconPlay, iconPause, 
} from '../../assets/images'
import { calRepository, Colors } from '../../assets/styles'

function ProgressBar() {
  const progress = useTrackPlayerProgress()
  const { duration, position } = progress
  // const time = moment.duration(123, 'second').format('mm:ss')
  const timeDuration = moment.utc(moment.duration(Math.floor(position), 'seconds').asMilliseconds()).format('mm:ss')
  const timePositon = moment.utc(moment.duration(Math.floor(duration), 'seconds').asMilliseconds()).format('mm:ss')
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.progress}>
        <View style={{ flex: progress.position, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{
            backgroundColor: Colors.primaryBlackText, 
            height: 2,
            flex: progress.position,
          }}
          />
          <View style={{
            width: 13 * calRepository, 
            height: 13 * calRepository,
            borderRadius: 7,
            backgroundColor: Colors.primaryBlackText, 
          
          }}
          />
        </View>
        <View
          style={{
            flex: progress.duration - progress.position,
            backgroundColor: 'grey',
          }}
        />
     
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 16, lineHeight: 17, marginTop: 20 }}>{timeDuration}</Text>
        <Text style={{ fontSize: 16, lineHeight: 17, marginTop: 20 }}>{timePositon}</Text>
      </View>
    </View>
  )
}
function ControlButton({ title, onPress, imageIcon }) {
  return (
    <TouchableOpacity style={styles.controlButtonContainer} onPress={onPress}>
      {/* <Text style={styles.controlButtonText}>{title}</Text> */}
      <Image source={imageIcon} />
    </TouchableOpacity>
  )
}
const Player = (props) => {
  const spinValue = new Animated.Value(0)
  const progress = useTrackPlayerProgress()
  const { duration, position } = progress
  const playbackState = usePlaybackState()
  Animated.loop(
    Animated.timing(
      spinValue,
      {
        toValue: playbackState === 'paused' ? 0 : 1,
        duration: 3000,
        // duration: Math.floor(duration) * 1000,
        easing: Easing.linear,
        useNativeDriver: true, // To make use of native driver for performance
      }
    )
  ).start()
  // useEffect(() => {
  //   res.start()
  // }, [])

  // Second interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  })
  // const playbackState = usePlaybackState()
  const [trackTitle, setTrackTitle] = useState('')
  const [trackArtwork, setTrackArtwork] = useState()
  const [trackArtist, setTrackArtist] = useState('')
  const [playerState, setState] = useState(null)
  useTrackPlayerEvents(['playback-track-changed'], async (event) => {
    if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
      const track = await TrackPlayer.getTrack(event.nextTrack)
      const { title, artist, artwork } = track || {}
      setTrackTitle(title)
      setTrackArtist(artist)
      setTrackArtwork(artwork)
    }
    if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_ERROR) {
      console.warn('An error occurred while playing the current track.')
    }
    if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_STATE) {
      setState(playbackState)
    }
  })
  const isPlaying = playerState === STATE_PLAYING
  
  const {
    style, onNext, onPrevious, onTogglePlayback, 
  } = props

  let middleButtonText = iconPause

  if (
    playbackState === TrackPlayer.STATE_PLAYING
    || playbackState === TrackPlayer.STATE_BUFFERING
  ) {
    // res.start()
    middleButtonText = iconPlay
  }
  return (
    <View style={[styles.card, style]}>
      {/* <Image style={styles.cover} source={{ uri: trackArtwork }} /> */}
      {/* <Text style={styles.title}>{trackTitle}</Text>
      <Text style={styles.artist}>{trackArtist}</Text> */}

      <View style={styles.controls}>
        <ControlButton imageIcon={previous} title={'<<'} onPress={onPrevious} />
        {/* <ControlButton  title={middleButtonText} onPress={onTogglePlayback} /> */}
        <TouchableOpacity onPress={onTogglePlayback}>
          <View style={{
            width: 110,
            height: 110, 
            borderRadius: 55,
            backgroundColor: '#BABCC6', 
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 50, 
          }}
          >
            <View style={{
              width: 90,
              height: 90, 
              borderRadius: 45,
              backgroundColor: Colors.primaryBlackText, 
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 50,
            }}
            >
              <Animated.Image style={{ width: 20, height: 25, transform: [{ rotate: spin }] }} resizeMode="contain" source={middleButtonText} />
            </View>
          </View>
        </TouchableOpacity>
        <ControlButton imageIcon={next} title={'>>'} onPress={onNext} />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 60 }}>
        <ProgressBar />
      </View>
      
    </View>
  )
}
{ /* <View style={[styles.card, style]}>
      <Image style={styles.cover} source={{ uri: trackArtwork }} />
      <Text style={styles.title}>{trackTitle}</Text>
      <Text style={styles.artist}>{trackArtist}</Text>
      <View style={styles.controls}>
        <ControlButton title={'<<'} onPress={onPrevious} />
        <ControlButton title={middleButtonText} onPress={onTogglePlayback} />
        <ControlButton title={'>>'} onPress={onNext} />
      </View>
    </View> */ }
const styles = StyleSheet.create({
  card: {
    width: '80%',
    
  },
  cover: {
    width: 140,
    height: 140,
    marginTop: 20,
    backgroundColor: 'grey',
  },
  progress: {
    height: 1,
    width: '90%',
    marginTop: 10,
    flexDirection: 'row',
    marginHorizontal: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  title: {
    marginTop: 10,
  },
  artist: {
    fontWeight: 'bold',
  },
  controls: {
    // marginVertical: 20,
    flexDirection: 'row',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  controlButtonContainer: {
    // flex: 1,
  },
  controlButtonText: {
    fontSize: 18,
    textAlign: 'center',
  },
  controlImage: {
    
  },
})
export default Player
