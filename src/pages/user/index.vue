<template>
  <div class="user">
    <div class="user-header">
      <image class="user-avatar" :src="userInfo.avatarUrl"></image>
      <div class="user-name">{{ userInfo.nickName }}</div>
    </div>

    <div class="weui-cells">
      <div class="weui-cell">
        <button open-type="feedback">
          <div class="weui-cell__bd">
            <div class="weui-cell__title">反馈建议</div>
            <i class="iconfont icon-enter"></i>
          </div>
        </button>
      </div>
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
    margin-bottom: 20rpx;
    position: relative;

    &::after {
      content: " ";
      position: absolute;
      left: 0;
      right: 0;
      height: 2rpx;
      color: rgba(0, 0, 0, 0.1);
      bottom: 0;
      border-bottom: 1rpx solid rgba(0, 0, 0, 0.1);
    }

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
}
</style>
