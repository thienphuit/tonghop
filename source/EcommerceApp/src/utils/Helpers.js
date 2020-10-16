import { showMessage } from 'react-native-flash-message'
import { MessageStyle } from '../../assets/styles'

export const showMes = (message, type = 'error') => {
  if (type === 'success') {
    return showMessage({
      message,
      ...MessageStyle.success,
    })
  }

  return showMessage({
    message,
    ...MessageStyle.error,
  })
}
export const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}
export const validateEmail = (emailTest) => {
  if (!emailTest.length) {
    return false
  }
  const re = /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/
  return re.test(String(emailTest).toLowerCase())
}
export const secondsToStringTime = (seconds) => {
  return new Date(seconds * 1000).toISOString().substr(11, 8).split(':')
}
