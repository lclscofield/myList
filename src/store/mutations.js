export function SET_LOGIN_TYPE (state, data) {
  state.loginType = data
}

export function SET_USER_INFO (state, data) {
  state.userInfo = data
}

export function SET_LIST (state, data, isAdd) {
  isAdd ? state.listArr.push(data) : (state.listArr = data)
}

export function SET_LIST_DATA (state, data) {
  state.listData = data
}

export function SET_LIST_CONFIG (state, data) {
  state.listConfig = data
}
