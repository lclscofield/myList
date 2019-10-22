<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      login: 'login',
      setLoading: 'setLoading'
    })
  },
  onLaunch () {
    wx.cloud.init({
      env: 'list-dev-xoqoz',
      traceUser: true
    })

    wx.hideTabBar()
    this.setLoading(true)
    wx.showLoading({
      title: '加载中...'
    })

    wx.getUserInfo({
      lang: 'zh_CN',
      success: res => {
        this.login(res.userInfo)
      },
      fail: res => {
        this.setLoading(false)
        wx.hideLoading()
      }
    })
  }
}
</script>
