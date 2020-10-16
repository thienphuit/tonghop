import { all } from 'redux-saga/effects'
import playlistSaga from './playlists'

export default function* rootSaga() {
  yield all([playlistSaga()])
}
