const USER_ID_KEY = 'escritorio-pagarme-user-id'
const USER_PROFILE_KEY = 'escritorio-pagarme-user-profile'

export function getUserId() {
  return window.localStorage.getItem(USER_ID_KEY)
}

export function setUserId(id) {
  window.localStorage.setItem(USER_ID_KEY, id)
  return id
}

export function getUserProfile() {
  return JSON.parse(window.localStorage.getItem(USER_PROFILE_KEY))
}

export function setUserProfile(obj) {
  window.localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(obj))
  return obj
}

export function clearUser() {
  window.localStorage.removeItem(USER_ID_KEY)
  window.localStorage.removeItem(USER_PROFILE_KEY)
}
