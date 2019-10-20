// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 获取数据库引用
const db = cloud.database()
// 获取用户引用
const users = db.collection('users')

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  const docs = (await users
    .where({
      openId: wxContext.OPENID
    })
    .get()).data

  let doc = null
  if (docs && docs.length) {
    doc = docs[0]
  } else {
    // 不存在就新建一个用户
    const userInfo = {
      ...event.userInfo,
      openId: wxContext.OPENID
    }
    const res = await users.add({
      data: userInfo
    })
    doc = (await users.doc(res._id).get()).data
  }

  return doc
}
