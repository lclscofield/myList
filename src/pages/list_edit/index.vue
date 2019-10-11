<template>
  <div class="list-edit">
    <EditHeader :title="title" :editType="editType"></EditHeader>
  </div>
</template>

<script>
import EditHeader from '../../components/edit/EditHeader'

export default {
  name: 'ListEdit',
  components: {
    EditHeader
  },
  data () {
    return {
      title: '', // 清单标题
      editType: 'edit', // 编辑类型，edit：编辑、creat：创建、noEdit：无法编辑
      listType: 'normal' // 清单类型，normal：正常、probation：试用
    }
  },
  onLoad () {
    // 设置导航栏 title
    wx.setNavigationBarTitle({
      title: '编辑清单'
    })
    const { title, listType } = this.$root.$mp.query
    this.listType = listType
  }
}
</script>

<style lang="scss" scoped>
</style>