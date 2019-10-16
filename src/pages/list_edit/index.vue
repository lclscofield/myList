<template>
  <div class="list-edit">
    <EditHeader :editType="editType" :isEdit="isEdit" :isShare="isShare" :createUserName="listData.createUserName" :createTime="listData.createTime" @changeIsEdit="changeIsEdit"></EditHeader>

    <div class="list-title">
      <input placeholder="标题" :value="listData.title" :disabled="!isEdit" @input="changeTitle" />
    </div>

    <EditText :disabled="!isEdit"></EditText>
  </div>
</template>

<script>
import EditHeader from '../../components/edit/EditHeader'
import EditText from '../../components/edit/EditText'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ListEdit',
  components: {
    EditHeader,
    EditText
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
      navigationBarTitle = '编辑清单'
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
  computed: {
    ...mapGetters({
      listData: 'getListData',
      listConfig: 'getListConfig'
    })
  },
  methods: {
    ...mapActions({
      setListConfig: 'setListConfig',
      resetListData: 'resetListData',
      resetListConfig: 'resetListConfig'
    }),
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
.list-edit {
  font-size: 32rpx;
  color: #1d1d1d;

  > .list-title {
    border-bottom: 2rpx solid #b7c5c5;
    margin: 20rpx 40rpx;
    padding: 20rpx 0;
    font-size: 36rpx;
  }
}
</style>