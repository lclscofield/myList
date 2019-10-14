<template>
  <div class="list-config">
    <div class="config-isedit">
      <div class="config-isedit-text">是否可编辑</div>
      <switch :checked="listConfig.isEdit" color="#70b7b7" @change="changeIsEdit"></switch>
    </div>
    <div class="config-btn">
      <mp-button type="warn" plain="true" :disabled="editType !== 'edit'" @click="deleteList">删除</mp-button>
      <mp-button type="default" plain="true" @click="resetListData">重置</mp-button>
    </div>
  </div>
</template>

<script>
import mpButton from 'mpvue-weui/src/button'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ListConfig',
  components: {
    mpButton
  },
  data () {
    return {
      isEdit: true,
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
    ...mapActions({
      resetListData: 'resetListData'
    }),
    changeIsEdit (e) {
      this.listConfig.isEdit = e.mp.detail.value
    },
    deleteList () { }
  }
}
</script>

<style lang="scss" scoped>
.list-config {
  font-size: 32rpx;
  color: #1d1d1d;
  padding: 40rpx 40rpx 20rpx;

  > .config-isedit {
    display: flex;
    justify-content: space-between;
    padding-bottom: 40rpx;

    > .config-isedit-text {
      color: #6d7575;
    }
  }

  > .config-btn {
    position: fixed;
    left: 0;
    bottom: 40rpx;
    width: 100%;
    display: flex;
    justify-content: space-around;

    /deep/ button {
      width: 30%;
      margin-top: 0;
    }
  }
}
</style>