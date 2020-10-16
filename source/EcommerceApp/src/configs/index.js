import {
  home, cart, offer, userIcon, search,
} from '../../assets/images'

export const SCREEN_NAME = {
  SplashScreen: 'SplashScreen',
  LoginScreen: 'LoginScreen',
  RegisterScreen: 'RegisterScreen',
  HomeScreen: 'HomeScreen',
  AccountScreen: 'Account',
  Profile: 'Profile',
  ChangeName: 'ChangeName',
  Gender: 'Gender',
  ExploreScreen: 'ExploreScreen',
  MAIN_TAB: 'MAIN_TAB',
  OfferScreen: 'OfferScreen',
  CartScreen: 'CartScreen',
  Phone: 'Phone',
  Email: 'Email',
  BirthDay: 'BirthDay',
  ChangePass: 'ChangePass',
  Notification: 'Notification',
  Address: 'Address',
  ProducDetail: 'ProducDetail',
  Logout: 'Logout',
}
export const TAB_DATA = [
  {
    title: 'Home',
    image: home,
  },
  {
    title: 'Explore',
    image: search,
  },
  {
    title: 'Cart',
    image: cart,
  },
  {
    title: 'Offer',
    image: offer,
  },
  {
    title: 'Account',
    image: userIcon,
  },
]

export const API_URL = 'https://huymanh.dev/ecommerce/api'
