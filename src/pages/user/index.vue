<template>
  <div class="user">
    <div class="user-header">
      <image class="user-avatar" :src="userInfo.avatarUrl"></image>
      <div class="user-name">{{ userInfo.nickName }}</div>
    </div>

    <div class="user-other">
      <button class="weui-cell weui-cell_access" open-type="feedback">
        <div class="weui-cell__bd">反馈建议</div>
        <!-- <i class="iconfont icon-other"></i> -->
      </button>
      <button class="weui-cell weui-cell_access" open-type="feedback">
        <div class="weui-cell__bd">反馈建议2</div>
        <!-- <i class="iconfont icon-other"></i> -->
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      userInfo: 'getUserInfo'
    })
  }
}
</script>

<style lang="scss" scoped>
.user {
  font-size: 32rpx;
  color: #1d1d1d;

  .user-header {
    padding: 20rpx 40rpx 40rpx;
    height: 180rpx;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-bottom: 2rpx solid #d8d8d8;
    margin-bottom: 20rpx;

    > .user-avatar {
      width: 120rpx;
      height: 120rpx;
      border-radius: 16rpx;
    }

    > .user-name {
      font-size: 40rpx;
      margin-left: 60rpx;
    }
  }

  > .user-other {
    > button {
      box-sizing: initial;
      font-size: initial;
      text-align: initial;
      text-decoration: initial;
      line-height: initial;
      border-radius: initial;

      &::before,
      &::after {
        content: none;
      }
    }
  }
}
</style>
