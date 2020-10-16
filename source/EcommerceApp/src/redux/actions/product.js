import { productTypes } from '../types'

export const getProduct = (data, callback) => {
  return {
    type: productTypes.PRODUCT_TYPE,
    payload: { data, callback },

  }
}
