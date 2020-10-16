import {
  home, sleep, meditate, music, aftar,
} from '../../assets/images'

export const SCREEN_NAME = {
  HomeScreen: 'HomeScreen',
  SigupAndSigIn: 'SigupAndSigIn',
  LoginScreen: 'LoginScreen',
  SleepScreen: 'SleepScreen',
  MeditateScreen: 'MeditateScreen',
  MusicScreen: 'MusicScreen',
  AfsarScreen: 'AfsarScreen',
  MainTab: 'MainTab',
  CourceDetails: 'CourceDetails',
  PlayScreenList: 'PlayScreenList',
}
export const TAB_DATA = [
  {
    title: 'Home',
    image: home,
  },
  {
    title: 'Sleep',
    image: sleep,
  },
  {
    title: 'Meditate',
    image: meditate,
  },
  {
    title: 'Music',
    image: music,
  },
  {
    title: 'Afsar',
    image: aftar,
  },
]
export const API_URL = 'https://api.spotify.com/v1/me/playlists'
