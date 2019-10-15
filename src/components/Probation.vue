<template>
  <div class="probation">
    <image class="probation-list-img" mode="widthFix" src="/static/images/probation-list.png"></image>
    <div class="probation-desc">自律的人更自由！</div>
    <mp-button type="default" size="large" @click="toListEdit">创建清单</mp-button>
    <mp-button type="primary" size="large" lang="zh-CN" open-type="getUserInfo" @getuserinfo="loginHandler">登录</mp-button>
  </div>
</template>

<script>
import mpButton from 'mpvue-weui/src/button'
import { mapActions } from 'vuex'

export default {
  name: 'Probation',
  components: {
    mpButton
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
    loginHandler (e) {
      if (e.mp.detail.userInfo) {
        this.login()
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
    width: 80%;
    border-radius: 8rpx;
  }

  .probation-desc {
    color: #6d7575;
    margin-bottom: 60rpx;
  }

  /deep/ button {
    width: 60%;
  }
  /deep/ button[type="primary"] {
    background-color: #70b7b7;
  }
}
</style>