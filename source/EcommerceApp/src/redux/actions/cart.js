import { cartTypes } from '../types'

export const getCart = (data, callback) => {
  return {
    type: cartTypes.GET_CART,
    payload: { data, callback },
  }
}
export const addCartToCart = (data, callback) => {
  return {
    type: cartTypes.ADD_PRODUCT_TO_CART,
    payload: { data, callback },
  }
}
export const cartIncreateAndDecreateAction = (productCode, status) => {
  return {
    type: cartTypes.CART_INCREATE_DECREATE,
    payload: { productCode, status },
  }
}
export const deleteProductonCart = (productCode) => {
  return {
    type: cartTypes.DELETE_PRODUCT_ON_CART,
    payload: { productCode },
  }
}
