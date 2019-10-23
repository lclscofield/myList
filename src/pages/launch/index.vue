<template>
  <div class="launch">
    <i class="iconfont icon-jiazaizhong"></i>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Launch',

  mounted () {
    if (this.loginType) {
      wx.switchTab({
        url: '../home/main'
      })
    } else {
      wx.getUserInfo({
        lang: 'zh_CN',
        success: async res => {
          this.getLogin(res)
        },
        fail: () => {
          wx.redirectTo({
            url: '../probation/main'
          })
        }
      })
    }
  },

  computed: {
    ...mapGetters({
      loginType: 'getLoginType'
    })
  },

  methods: {
    ...mapActions({
      login: 'login'
    }),
    async getLogin (res) {
      const userInfo = await this.login(res.userInfo)
      // 登录成功进入首页，否则进入试用页
      if (userInfo) {
        wx.switchTab({
          url: '../home/main'
        })
      } else {
        wx.redirectTo({
          url: '../probation/main'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.launch {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .icon-jiazaizhong {
    color: #70b7b7;
    margin-top: -400rpx;
    font-size: 160rpx;
    animation: spin 1s linear infinite;
  }
}
</style>
