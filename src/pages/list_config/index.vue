<template>
  <div class="list-config">
    <div class="config-open">
      <div class="config-open-title">他人可分享</div>
      <switch :checked="listConfig.isShare" color="#70b7b7" @change="changeIsShare"></switch>
    </div>
    <div class="config-open">
      <div class="config-open-title">他人可编辑</div>
      <switch :checked="listConfig.isEdit" color="#70b7b7" @change="changeIsEdit"></switch>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ListConfig',
  data () {
    return {
      editType: 'edit'
    }
  },
  computed: {
    ...mapGetters({
      listConfig: 'getListConfig'
    })
  },
  onLoad () {
    Object.assign(this.$data, this.$options.data())

    const { editType } = this.$root.$mp.query
    this.editType = editType
  },
  methods: {
    changeIsShare (e) {
      this.listConfig.isShare = e.mp.detail.value
    },
    changeIsEdit (e) {
      this.listConfig.isEdit = e.mp.detail.value
    }
  }
}
</script>

<style lang="scss" scoped>
.list-config {
  font-size: 32rpx;
  color: #1d1d1d;
  padding: 40rpx 40rpx 20rpx;

  > .config-open {
    display: flex;
    justify-content: space-between;
    padding-bottom: 60rpx;

    > .config-open-title {
      color: #6d7575;
    }
  }
}
</style>