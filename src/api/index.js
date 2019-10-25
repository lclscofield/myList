// 登录
export function login (userInfo) {
  return wx.cloud.callFunction({
    name: 'login',
    data: {
      userInfo
    }
  })
}

// 获取清单列表
export function getList (data) {
  return []
  // return wx.cloud.callFunction({
  //   name: 'login',
  //   data: {
  //     userInfo
  //   }
  // })
}
