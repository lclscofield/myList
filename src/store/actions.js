import { listData, listConfig } from './initData'
import { copy } from '../utils'
import * as api from '../api'

// 设置登录状态
export function setLoginType ({ commit }, data) {
  commit('SET_LOGIN_TYPE', data)
}

// 设置当前清单数据
export function setListData ({ commit }, data) {
  commit('SET_LIST_DATA', data)
}

// 设置清单配置
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
export async function login ({ state, commit }, userInfo) {
  const res = await api.login(userInfo)

  if (res.result) {
    state.loginType = true
    commit('SET_USER_INFO', res.result)
    return res.result
  }
}

// 获取清单列表
export async function apiGetList ({ commit }, data, isAdd) {
  const res = await api.getList(data)

  if (res.result) {
    commit('SET_LIST', res.result, isAdd !== 'noAdd')
    return res.result
  }
}

// 保存清单
export async function saveList ({ state }) {}

// 删除清单
export async function deleteList ({ state }) {}
