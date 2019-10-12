<template>
  <div class="edit-header">
    <div class="create-info" @click="showToast = true">
      <div class="create-person-wrap">创建者:<span class="create-person">{{ createPerson }}</span></div>
      <div class="create-time-wrap">by:<span class="create-time">{{ formatCreateTime }}</span></div>
    </div>
    <i class="iconfont icon-setup" @click="toListConfig"></i>

    <mp-toast v-model="showToast" :content="createPerson"></mp-toast>
  </div>
</template>

<script>
import mpInput from 'mpvue-weui/src/input'
import mpToast from 'mpvue-weui/src/toast'
import { formatTime } from '../../utils'

export default {
  name: 'EditHeader',
  props: {
    createPerson: {
      type: String,
      default: 'hahaha'
    },
    createTime: {
      type: String,
      default: ''
    },
    editType: {
      type: String,
      default: 'edit'
    }
  },
  components: {
    mpInput,
    mpToast
  },
  data () {
    return {
      formatCreateTime: '',
      showToast: false
    }
  },
  created () {
    this.createTime = new Date()
    this.formatCreateTime = formatTime(this.createTime)
  },
  methods: {
    emitTitle (val) {
      this.$emit('input', val)
    },
    toListConfig () {
      wx.navigateTo({
        url: '../list_config/main'
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
    font-size: 36rpx;
  }
}
</style>