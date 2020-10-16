import { playlistTypes } from '../types'

export const getPlayList = (data, callback) => {
  return {
    type: playlistTypes.GET_PLAY_LIST,
    payload: { data, callback },
  }
}
