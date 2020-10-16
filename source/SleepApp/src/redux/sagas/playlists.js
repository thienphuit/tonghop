import {
  call, put, takeLatest, 
} from 'redux-saga/effects'
import axios from 'axios'
import { playlistTypes } from '../types'
import { API_URL } from '../../configs'

function* getPlaylist(action) {
  const { callback, token } = action?.payload
  try {
    const response = yield call(() => axios.get(`${API_URL}`, {
      headers: {
        Authorization: 'Bearer BQDLCczWEL96PNWPfpDq_S5Bzv3Rr-VdFpTmJ0B4GxG4CBh0mUBAQhxnYbEQL4DL84zLAHYtBGDZRX-g_YCxYpQ6N79SnyuGMwi9uoXg3fEKxkgrE3snn2Nqsv3K4fccq9-wMhV3T2yduweliX18Wn_SHABC0VxihhSFh7Kf-BSTevFxDbqJOzfytHCY7rNR28oNzuLAhYqkOEDl2I0D1BonPxXm_Txq-F4sgN5haj_FCt9Dlm3CyeArcgL0vIUD--DFc3ggeOjtHOuPEVVdiRD9zYBJE-HqCxI',
      },
    }))
    yield put({ type: playlistTypes.GET_PLAY_LIST_SUCCESS, payload: { data: response.data } })
    callback(response)
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
}
export default function* playlistSaga() {
  yield takeLatest(playlistTypes.GET_PLAY_LIST, getPlaylist)
}
