<template>
  <div class="probation">
    <image class="probation-list-img" mode="widthFix" src="/static/images/probation-list.png"></image>
    <div class="probation-desc">自律的人更自由！</div>
    <button class="btn" type="default" size="large" @click="toListEdit">创建清单</button>
    <button class="btn btn-login" type="primary" size="large" lang="zh_CN" open-type="getUserInfo" @getuserinfo="loginHandler">登录</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Probation',
  methods: {
    ...mapActions({
      login: 'login'
    }),
    toListEdit () {
      wx.navigateTo({
        url: '../list_edit/main?editType=create'
      })
    },
    loginHandler (e) {
      const userInfo = e.mp.detail.userInfo
      if (userInfo) {
        this.login(userInfo)
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

  .probation-list-img {
    margin: 140rpx 0 60rpx;
    width: 600rpx;
    border-radius: 8rpx;
  }

  .probation-desc {
    color: #6d7575;
    margin-bottom: 60rpx;
  }

  > .btn {
    width: 600rpx;

    &.btn-login {
      margin-top: 40rpx;
    }
  }
}
</style>