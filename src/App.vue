<script>
export default {
  created () {
    wx.getUserInfo({
      lang: 'zh_CN',
      success: function (res) {
        console.log(res)
      },
      fail: function (res) {
        console.log(res)
        wx.hideTabBar()
      }
    })
  }
}
</script>
