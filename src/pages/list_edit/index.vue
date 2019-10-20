<template>
  <div class="list-edit-wrap">
    <scroll-view class="list-edit" scroll-y="true">
      <EditHeader :editType="editType" :createUserName="listData.createUserName" :createTime="listData.createTime"></EditHeader>

      <div class="list-title" :class="{ 'is-disabled': !isEdit }">
        <input placeholder="标题" maxlength="12" :value="listData.title" :disabled="!isEdit" @input="changeTitle" />
      </div>

      <EditContent :disabled="!isEdit"></EditContent>
    </scroll-view>

    <EditFooter :editType="editType" :isEdit="isEdit" @changeIsEdit="changeIsEdit"></EditFooter>
  </div>
</template>

<script>
import EditHeader from '../../components/edit/EditHeader'
import EditFooter from '../../components/edit/EditFooter'
import EditContent from '../../components/edit/EditContent'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ListEdit',
  components: {
    EditHeader,
    EditFooter,
    EditContent
  },
  data () {
    return {
      editType: 'edit', // 编辑类型，edit：编辑、creat：创建
      isEdit: false, // 是否编辑状态
      isShare: false // 是否分享清单状态
    }
  },
  // 页面加载
  onLoad () {
    Object.assign(this.$data, this.$options.data())
    const { title, editType, isShare, ListId } = this.$root.$mp.query
    this.editType = editType
    this.isShare = isShare || false

    let navigationBarTitle = ''
    if (editType === 'create') {
      this.isEdit = true
      navigationBarTitle = '创建清单'
    } else if (editType === 'edit') {
      navigationBarTitle = title || ''
      if (ListId) {
        console.log('getList', ListId)
      }
    }
    // 设置导航栏 title
    wx.setNavigationBarTitle({
      title: navigationBarTitle
    })
  },
  // 页面卸载
  onUnload () {
    // 退出编辑时，清单数据和配置还原
    this.resetListData()
    this.resetListConfig()
  },
  // 转发
  onShareAppMessage () {
    return {}
  },
  computed: {
    ...mapGetters({
      listData: 'getListData',
      listConfig: 'getListConfig'
    })
  },
  methods: {
    ...mapActions({
      resetListData: 'resetListData',
      resetListConfig: 'resetListConfig'
    }),
    // 改变标题
    changeTitle (e) {
      this.listData.title = e.mp.detail.value
    },
    // 改变编辑状态
    changeIsEdit () {
      this.isEdit = !this.isEdit
    }
  }
}
</script>

<style lang="scss" scoped>
.list-edit-wrap {
  font-size: 32rpx;
  color: #1d1d1d;
  height: 100vh;

  > .list-edit {
    height: calc(100vh - 188rpx);

    .list-title {
      border-bottom: 2rpx solid #b7c5c5;
      margin: 20rpx 40rpx;
      padding: 20rpx 0;
      font-size: 36rpx;
      &.is-disabled {
        border-color: transparent;
        text-align: center;
      }
    }
  }
}
</style>