import { all } from 'redux-saga/effects'
import userSaga from './user'
import productSaga from './product'
import categoriesSaga from './categories'

export default function* rootSaga() {
  yield all([userSaga(), productSaga(), categoriesSaga()])
}
