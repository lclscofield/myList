<template>
  <div class="list-edit">
    <EditHeader v-model="title" :editType="editType" :createPerson="listData.createPerson" :createTime="listData.createTime"></EditHeader>
  </div>
</template>

<script>
import EditHeader from '../../components/edit/EditHeader'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ListEdit',
  components: {
    EditHeader
  },
  data () {
    return {
      title: '', // 清单标题
      editType: 'edit', // 编辑类型，edit：编辑、creat：创建
      listType: 'normal', // 清单类型，normal：正常、probation：试用
      listData: {} // 清单数据
    }
  },
  // 页面加载
  onLoad () {
    // 设置导航栏 title
    wx.setNavigationBarTitle({
      title: '编辑清单'
    })
    const { title, editType, listType } = this.$root.$mp.query
    this.loadInit(this.title, title)
    this.loadInit(this.editType, editType)
    this.loadInit(this.listType, listType)

    if (listType === 'normal') {
      console.log(123)
    } else if (listType === 'probation') {
      this.editType = 'create'
    }
  },
  // 页面卸载
  onUnload () {
    // 退出编辑时，清单配置还原
    this.setListConfig({
      // 初始清单配置
      isEdit: true // 是否能编辑
    })
  },
  computed: {
    ...mapGetters({
      listConfig: 'getListConfig'
    })
  },
  methods: {
    ...mapActions({
      setListConfig: 'setListConfig'
    }),
    // 加载初始化数据
    loadInit (data, param) {
      data = param || data
    }
  }
}
</script>

<style lang="scss" scoped>
.list-edit {
  font-size: 32rpx;
  color: #1d1d1d;
}
</style>