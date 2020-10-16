import { categoriesTypes } from '../types'

const initState = []

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case categoriesTypes.GET_CATEGORIES_SUCCESS:
      return action?.payload?.data
    default:
      return state
  }
}

export default cartReducer
