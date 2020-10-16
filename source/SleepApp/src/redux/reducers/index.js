import { combineReducers } from 'redux'
import playlistReducer from './playlists'

const rootReducer = combineReducers({
  playlists: playlistReducer,
})
export default rootReducer
