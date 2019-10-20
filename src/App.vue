<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      login: 'login'
    })
  },
  onLaunch () {
    wx.cloud.init({
      env: 'list-dev-xoqoz',
      traceUser: true
    })

    wx.hideTabBar()

    wx.getUserInfo({
      lang: 'zh_CN',
      success: res => {
        console.log(res)
        this.login(res.userInfo)
      }
    })
  }
}
</script>
