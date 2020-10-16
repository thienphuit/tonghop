import _ from 'lodash'
import { cartTypes } from '../types'

const initState = []

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case cartTypes.ADD_PRODUCT_TO_CART: {
      // const newSate = _.unionBy(state, [action?.payload?.data], 'id')
      const oldCart = [...state]
      const found = oldCart.some((item) => item.id === action.payload.data.id)
      if (!found) {
        oldCart.push(action.payload.data)
      }
      return oldCart
    }
    case cartTypes.CART_INCREATE_DECREATE: {
      const { productCode, status } = action.payload
      const cartProduct = [...state]
      const index = cartProduct.findIndex((item) => item.id === productCode)
      if (status) {
        cartProduct[index].quantity++
      } else if (cartProduct[index].quantity > 1) {
        cartProduct[index].quantity--
      }
      return cartProduct
    }
    case cartTypes.DELETE_PRODUCT_ON_CART: {
      const { productCode } = action.payload
      return [...state.filter((item) => item.id !== productCode)]
    }
      
    default:
      return state
  }
}

export default cartReducer
