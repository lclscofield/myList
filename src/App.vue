<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      login: 'login'
    })
  },
  onLaunch () {
    wx.hideTabBar()

    wx.getUserInfo({
      success: res => {
        console.log(res)
        this.login()
      }
    })
  }
}
</script>
