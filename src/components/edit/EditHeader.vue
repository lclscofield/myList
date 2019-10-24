<template>
  <div class="edit-header">
    <div class="create-info" @click="showCreateUserName">
      <div class="create-person-wrap">创建者:<span class="create-person">{{ createUserName }}</span></div>
      <div class="create-time-wrap">by:<span class="create-time">{{ formatCreateTime }}</span></div>
    </div>
    <i class="iconfont icon-setup" v-if="showConfig" @click="toListConfig"></i>

  </div>
</template>

<script>
import { formatTime } from '../../utils'

export default {
  name: 'EditHeader',
  props: {
    createUserName: {
      type: String,
      default: '...'
    },
    createTime: {
      type: Number
    },
    editType: {
      type: String,
      default: 'edit'
    }
  },
  data () {
    return {
      showConfig: false,
      formatCreateTime: ''
    }
  },
  mounted () {
    this.formatCreateTime = this.createTime ? formatTime(this.createTime) : '...'
  },
  methods: {
    // 跳转清单配置页
    toListConfig () {
      wx.navigateTo({
        url: '../list_config/main?editType=' + this.editType
      })
    },
    // 展示创建者
    showCreateUserName () {
      wx.showToast({
        title: this.createUserName,
        icon: 'none'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.edit-header {
  display: flex;
  align-items: center;
  border-bottom: 2rpx solid #b7c5c5;
  padding: 40rpx 40rpx 20rpx;
  font-size: 32rpx;
  color: #1d1d1d;

  > .create-info {
    flex: 1;
    display: flex;
    align-items: baseline;

    > .create-person-wrap {
      font-size: 24rpx;
      color: #6d7575;
      display: flex;
      align-items: baseline;

      > .create-person {
        font-size: 36rpx;
        color: #1d1d1d;
        padding-left: 10rpx;
        max-width: 260rpx;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    > .create-time-wrap {
      margin-left: 20rpx;
      font-size: 24rpx;
      color: #6d7575;

      > .create-time {
        padding-left: 10rpx;
      }
    }
  }

  > .icon-setup {
    font-size: 40rpx;
  }
}
</style>