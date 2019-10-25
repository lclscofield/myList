<script>
export default {
  onLaunch () {
    wx.cloud.init({
      env: 'list-dev-xoqoz',
      traceUser: true
    })
  }
}
</script>

<style lang="scss">
page {
  background-color: #f1f1f1;
}
</style>
