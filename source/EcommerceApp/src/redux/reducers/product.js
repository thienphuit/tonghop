import { productTypes } from '../types'
import {
  productLike,
  shoes_2,
  promotionImage, shoesImage,
} from '../../../assets/images'

const init = {
  listShoes: [
    { id: 1, title: 'Nike Air Max 97 Utility', image: productLike },
    { id: 2, title: 'Nike Air Vapormax 360', image: shoes_2 },
    { id: 3, title: 'Nike Air Max 270 React ENG', image: shoes_2 },
    { id: 4, title: 'Nike Air Max 270 React', image: productLike },
    { id: 5, title: 'Nike Air VaporMax Flyknit 3', image: shoes_2 },
  ],
  productLikes: [
    { id: 1, title: 'Nike Air Max 97 Utility', image: productLike },
    { id: 2, title: 'Nike Air Vapormax 360', image: shoes_2 },
    { id: 3, title: 'Nike Air Max 270 React ENG', image: shoes_2 },
    { id: 4, title: 'Nike Air Max 270 React ENG', image: shoes_2 },
  ],
  swipperList: [
    { image: promotionImage },
    { image: shoes_2 },
    { image: shoesImage },
  ],
  products: [],
}
const productReducer = (state = init, action) => {
  switch (action.type) {
    case productTypes.PRODUCT_TYPE:
      return { ...state, products: [...state.listShoes] }
    case productTypes.PRODUCT_LIKE:
      return { ...state, productLikes: [...state.productLikes] }
    case productTypes.CATEGORY:
      return { ...state, categorys: [...state.categorys] }
    case productTypes.SWIPPERS:
      return { ...state, swipperList: [...state.swipperList] }
    case productTypes.PRODUCT_TYPE_SUCCESS:
      return { ...state, products: action.payload.data }
    default:
      return state
  }
}
export default productReducer
