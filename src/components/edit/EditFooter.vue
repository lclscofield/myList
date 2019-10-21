<template>
  <div class="edit-footer">
    <div class="footer-btn">
      <button class="btn" type="primary" plain="true" :disabled="!isAdmin" hover-start-time="20" hover-stay-time="70" open-type="share">分享</button>
      <button v-if="loginType" class="btn" type="primary" :disabled="!isAdmin" hover-start-time="20" hover-stay-time="70" @click="saveList">保存</button>
      <button v-else class="btn" type="primary" hover-start-time="20" hover-stay-time="70" lang="zh_CN" open-type="getUserInfo" @getuserinfo="loginHandler">登录</button>
    </div>
    <i class="iconfont icon-other" @click="showActionSheet"></i>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'EditFooter',
  props: {
    editType: {
      type: String,
      default: 'edit'
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({
      loginType: 'getLoginType'
    }),
    // 是否试用
    isProbation () {
      return !this.loginType && this.editType === 'create'
    },
    // 是否有权限
    isAdmin () {
      // 只有创建者有此权限
      return (this.loginType && this.editType === 'edit' && this.userInfo.id === this.listData.createUserId) || (this.loginType && this.editType === 'create')
    }
  },
  watch: {
    isAdmin (val) {
      !val && wx.hideShareMenu()
    }
  },
  mounted () {
    if (!this.isAdmin) {
      wx.hideShareMenu()
    }
  },
  methods: {
    ...mapActions({
      resetListData: 'resetListData',
      login: 'login'
    }),
    // 保存
    saveList () {
      if (this.isAdmin) {
      }
    },
    // 显示 ActionSheet
    showActionSheet () {
      const itemList = this.isEdit ? ['预览', '重置', '删除'] : ['编辑', '重置', '删除']
      wx.showActionSheet({
        itemList: itemList,
        success: res => {
          const idx = res.tapIndex
          if (idx === 0) {
            this.editHandler()
          } else if (idx === 1) {
            this.resetListData()
          } else if (idx === 2) {
            this.deleteHandler()
          }
        }
      })
    },
    // 编辑处理
    editHandler () {
      if (this.isAdmin || this.isProbation) {
        this.$emit('changeIsEdit')
      }
    },
    // 删除处理
    deleteHandler () {
      wx.showToast({
        title: 'xxxx',
        icon: 'success'
      })
    },
    // 登录
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
.edit-footer {
  font-size: 32rpx;
  color: #1d1d1d;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  padding: 40rpx 40rpx 60rpx;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0 -2rpx 2rpx 2rpx #e9f1f1;

  > .footer-btn {
    flex: 1;
    display: flex;
    justify-content: space-around;

    > .btn {
      width: 280rpx;
    }
  }

  > .icon-other {
    font-size: 60rpx;
  }
}
</style>