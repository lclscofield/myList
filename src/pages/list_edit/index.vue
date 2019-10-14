<template>
  <div class="list-edit">
    <EditHeader :editType="editType" :createPerson="listData.createPerson" :createTime="listData.createTime"></EditHeader>

    <div class="list-title">
      <input placeholder="标题" :value="title" @input="changeTitle" />
    </div>

    <EditText></EditText>
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
      title: '', // 清单标题
      editType: 'edit', // 编辑类型，edit：编辑、creat：创建
      listType: 'normal' // 清单类型，normal：正常、probation：试用
    }
  },
  // 页面加载
  onLoad () {
    Object.assign(this.$data, this.$options.data())
    // 设置导航栏 title
    wx.setNavigationBarTitle({
      title: '编辑清单'
    })
    const { title, editType, listType } = this.$root.$mp.query
    this.loadInit(this.title, title)
    this.loadInit(this.editType, editType)
    this.loadInit(this.listType, listType)

    if (listType === 'normal') {
    } else if (listType === 'probation') {
      this.editType = 'create'
    }
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
    // 加载初始化数据工具函数
    loadInit (data, param) {
      data = param || data
    },
    changeTitle (e) {
      this.title = e.mp.detail.value
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