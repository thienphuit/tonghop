// eslint-disable-next-line import/no-extraneous-dependencies
import Reactotron from 'reactotron-react-native'
import AsyncStorage from '@react-native-community/async-storage'
// eslint-disable-next-line import/no-extraneous-dependencies
import { reactotronRedux } from 'reactotron-redux'

Reactotron.clear()
const reactotron = Reactotron
  .setAsyncStorageHandler(AsyncStorage) // `@react-native-community/async-storage` depending on where you get it from
  .configure({
    name: 'EcommerceApp react native', // Ung dung dang chay
    host: 'localhost',
    post: 9090,
  }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(reactotronRedux())
  .connect() // let's connect!

console.tron = reactotron

console.tron.log()
export default reactotron
