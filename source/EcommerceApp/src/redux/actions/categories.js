import { categoriesTypes } from '../types'

export const getCategories = (data, callback) => {
  return {
    type: categoriesTypes.GET_CATEGORIES,
    payload: { data, callback },
  }
}
