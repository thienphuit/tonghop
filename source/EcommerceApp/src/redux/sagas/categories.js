import {
  call, put, takeLatest,
} from 'redux-saga/effects'
import axios from 'axios'
import { API_URL } from '../../configs'
import { categoriesTypes } from '../types'

function* getCategories(action) {
  const { callback } = action?.payload
  try {
    const { token } = action?.payload?.data
    const response = yield call(() => axios.post(`${API_URL}/category`, {
      token,
    }))
    yield put({
      type: categoriesTypes.GET_CATEGORIES_SUCCESS,
      payload: { data: response.data.data },
    })
    callback(response.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
export default function* productSaga() {
  yield takeLatest(categoriesTypes.GET_CATEGORIES, getCategories)
}
