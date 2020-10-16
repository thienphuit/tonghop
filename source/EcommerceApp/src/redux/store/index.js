import { createStore, applyMiddleware, compose } from 'redux'
import AsyncStorage from '@react-native-community/async-storage'
import { persistStore, persistReducer } from 'redux-persist'
import createEncryptor from 'redux-persist-transform-encrypt'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import Reactotron from '../../configs/ReactotronConfig'
import rootSaga from '../sagas'

const encryptor = createEncryptor({
  secretKey: 'daadfaf334324ddcsfs',
  onError(error) {
    // Handle the error.
    console.log('============================')
    console.log('encrypter', error)
    console.log('============================')
  },
})
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  transforms: [encryptor],
}
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = compose

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, composeEnhancers(Reactotron.createEnhancer(), applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)
persistStore(store)
// purge()
export default store
