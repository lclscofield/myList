<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      setLoginType: 'setLoginType'
    })
  },
  onLaunch () {
    wx.hideTabBar()

    wx.getUserInfo({
      success: res => {
        console.log(res)
        wx.showTabBar()
        this.setLoginType(true)
      },
      fail: () => {
        this.setLoginType(false)
      }
    })
  }
}
</script>
