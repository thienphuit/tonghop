import {
  call, put, takeLatest,
} from 'redux-saga/effects'
import axios from 'axios'
import { API_URL } from '../../configs'
import { productTypes } from '../types'

function* getProduct(action) {
  const { callback } = action?.payload
  try {
    const { token } = action?.payload?.data
    const response = yield call(() => axios.post(`${API_URL}/product`, {
      token,
    }))
    yield put({
      type: productTypes.PRODUCT_TYPE_SUCCESS,
      payload: { data: response.data.data },
    })
    callback(response.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
export default function* productSaga() {
  yield takeLatest(productTypes.PRODUCT_TYPE, getProduct)
}
