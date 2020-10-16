const { playlistTypes } = require('../types')

const initState = []

const playlistReducer = (state = initState, action) => {
  switch (action.type) {
    case playlistTypes.GET_PLAY_LIST_SUCCESS:
      
      return action?.payload?.data
  
    default:
      return state
  }
}

export default playlistReducer
