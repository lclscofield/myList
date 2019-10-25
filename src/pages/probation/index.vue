<template>
  <div class="probation">
    <image class="probation-list-img" mode="widthFix" src="/static/images/probation-list.png"></image>
    <div class="probation-desc">自律的人更自由！</div>
    <button class="btn btn-width" type="default" size="large" @click="toListEdit">创建清单</button>
    <button class="btn btn-width btn-login" type="primary" size="large" lang="zh_CN" open-type="getUserInfo" @getuserinfo="loginHandler">登录</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Probation',

  onShow () {
    if (this.loginType) {
      wx.switchTab({
        url: '../home/main'
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
    toListEdit () {
      wx.navigateTo({
        url: '../list_edit/main?editType=create'
      })
    },
    async loginHandler (e) {
      const userInfo = e.mp.detail.userInfo
      if (userInfo) {
        wx.showLoading({
          title: '登录中...',
          mask: true
        })
        const res = await this.login(userInfo)
        // 登录成功进入首页
        wx.hideLoading()
        if (res) {
          wx.showToast({
            title: '登录成功'
          })
          wx.switchTab({
            url: '../home/main'
          })
        } else {
          wx.showToast({
            title: '登录失败，请重试',
            icon: 'none'
          })
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.probation {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 32rpx;
  animation: fade-in 0.3s linear;

  .probation-list-img {
    margin: 140rpx 0 60rpx;
    width: 600rpx;
    border-radius: 8rpx;
  }

  .probation-desc {
    color: #6d7575;
    margin-bottom: 60rpx;
  }

  > .btn-width {
    width: 600rpx;

    &.btn-login {
      margin-top: 40rpx;
    }
  }
}
</style>