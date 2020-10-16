import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
const calRepository = width / 415

const Colors = {
  bgButtonPurple: '#8E97FD',
  primaryGrey: '#A1A4B2',
  primaryBlackText: '#3F414E',
  background: '#FFF',
  backgroundButton: '#8E97FD',
  primaryOrange: '#FFDB9D',
  bgFocus: '#AFDBC5',
  borderColor: '#EBEAEC',
  selection: '#A0A3B1',
  selectionMeditate: '#F1DDCF',
  bgMusic: '#FAF7F3',
  primaryPink: '#FF84A2',
}
const Fonts = {
  bold: {
    fontFamily: 'HelveticaNeueBold',
  },
  light: {
    fontFamily: 'HelveticaNeueLight',
  },
  airbnbBold: {
    fontFamily: 'AirbnbCerealApp-Bold',
  },
}
export {
  calRepository, Colors, Fonts,
}
