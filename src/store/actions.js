export function setLoginType ({ commit }, data) {
  commit('SET_LOGIN_TYPE', data)
}

export async function apiGetUserInfo ({ commit }, data) {
  commit('SET_USER_INFO', {
    username: 'xxx'
  })
}

export function setListConfig ({ commit }, data) {
  commit('SET_LIST_CONFIG', data)
}
