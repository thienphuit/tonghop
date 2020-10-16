import { combineReducers } from 'redux'
import userReducer from './user'
import productReducer from './product'
import cartReducer from './cart'
import categoriesReducer from './categories'

const appReducer = combineReducers({
  user: userReducer, products: productReducer, cart: cartReducer, categories: categoriesReducer,
})
const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }
  return appReducer(state, action)
}
export default rootReducer
