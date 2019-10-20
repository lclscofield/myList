export function login (userInfo) {
  return wx.cloud.callFunction({
    name: 'login',
    data: {
      userInfo
    }
  })
}
