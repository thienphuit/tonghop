import { userTypes } from '../types'

export const regiserUser = (data, callback) => {
  return {
    type: userTypes.REGISTER_USER,
    payload: { data, callback },
  }
}
export const loginUser = (data, callback) => {
  return {
    type: userTypes.LOGIN_USER,
    payload: { data, callback },

  }
}
export const profileUser = (data, callback) => {
  return {
    type: userTypes.PROFILE_USER,
    payload: { data, callback },

  }
}
export const updateProfileUser = (data, callback) => {
  return {
    type: userTypes.PROFILE_USER_UPDATE,
    payload: { data, callback },
  }
}
