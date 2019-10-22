import { listData, listConfig } from './initData'
import { copy } from '../utils'

export default {
  loginType: false, // 登录状态
  userInfo: {}, // 用户信息
  listData: copy(listData), // 当前清单数据
  listConfig: copy(listConfig), // 当前清单配置
  loading: false // 加载中
}
