<template>
  <div class="edit-header">
    <div class="create-info" @click="showTip('name')">
      <div class="create-person-wrap">创建者:<span class="create-person">{{ createUserName }}</span></div>
      <div class="create-time-wrap">by:<span class="create-time">{{ formatCreateTime }}</span></div>
    </div>
    <i class="iconfont icon-other" @click="showActionSheet"></i>
    <i class="iconfont icon-setup" @click="toListConfig"></i>

    <mp-toast v-model="showToast" :type="toastType" :content="toastContent"></mp-toast>
  </div>
</template>

<script>
import mpToast from 'mpvue-weui/src/toast'
import { formatTime } from '../../utils'
import { mapGetters } from 'vuex'

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
    },
    listType: {
      type: String,
      default: 'normal'
    }
  },
  components: {
    mpToast
  },
  data () {
    return {
      formatCreateTime: '',
      showToast: false,
      toastContent: '',
      toastType: ''
    }
  },
  mounted () {
    this.formatCreateTime = this.createTime ? formatTime(this.createTime) : '...'
  },
  computed: {
    ...mapGetters({
      listData: 'getListData',
      listConfig: 'getListConfig',
      loginType: 'getLoginType',
      userInfo: 'getUserInfo'
    })
  },
  methods: {
    // 提示弹窗
    showTip (tipType) {
      if (tipType === 'name') {
        this.toastContent = this.createUserName
        this.toastType = ''
        this.showToast = true
      } else if (tipType === 'no') {
        this.toastContent = '没有权限!'
        this.toastType = 'warn'
        this.showToast = true
      }
    },
    // 跳转清单配置页
    toListConfig () {
      let isAdmin = false
      // 试用，或者，已登陆并且本人就是创建者
      if (this.listType === 'probation' || (this.loginType && this.userInfo.id === this.listData.createUserId)) {
        isAdmin = true
      }
      if (isAdmin) {
        wx.navigateTo({
          url: '../list_config/main?editType=' + this.editType
        })
      } else {
        this.showTip('no')
      }
    },
    // 显示 ActionSheet
    showActionSheet () {
      wx.showActionSheet({
        itemList: ['分享', '编辑'],
        itemColor: '#70b7b7',
        success: res => {
          const idx = res.tapIndex
          if (idx === 0) {
            this.shareHandler()
          } else if (idx === 1) {
            this.editHandler()
          }
        }
      })
    },
    // 分享处理
    shareHandler () {

    },
    // 编辑处理
    editHandler () { }
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
        max-width: 220rpx;
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