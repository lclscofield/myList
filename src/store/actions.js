import { listData, listConfig } from './initData'
import { copy } from '../utils'
import * as api from '../api'

export function setLoginType ({ commit }, data) {
  commit('SET_LOGIN_TYPE', data)
}

export async function apiGetUserInfo ({ commit }, data) {
  commit('SET_USER_INFO', {
    username: 'xxx'
  })
}

export function setListData ({ commit }, data) {
  commit('SET_LIST_DATA', data)
}

export function setListConfig ({ commit }, data) {
  commit('SET_LIST_CONFIG', data)
}

// 重置清单数据
export function resetListData ({ state }) {
  state.listData = copy(listData)
}

// 重置清单配置
export function resetListConfig ({ state }) {
  state.listConfig = copy(listConfig)
}

// 登录
export async function login ({ state }, userInfo) {
  const res = await api.login(userInfo)
  if (res.result) {
    state.loginType = true
    wx.showTabBar()
  }
}

// 保存清单
export async function saveList ({ state }) {}

// 删除清单
export async function deleteList ({ state }) {}
