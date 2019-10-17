<template>
  <div class="edit-text">
    <div class="edit-text-content" v-for="(item, idx) in listData.textContent" :key="idx + item">
      <div class="content-index">{{ idx + 1 }}、</div>
      <textarea class="content" :value="item" :disabled="disabled" auto-height placeholder="请输入清单内容" @input="changeContent($event, idx)" />
      <i class="iconfont icon-addition" v-if="idx === listData.textContent.length - 1" @click="addText"></i>
      <i class="iconfont icon-delete" v-else @click="deleteText(idx)"></i>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'EditText',
  props: {
    disabled: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    ...mapGetters({
      listData: 'getListData'
    })
  },
  methods: {
    changeContent (e, idx) {
      this.listData.textContent[idx] = e.mp.detail.value
    },
    addText () {
      this.listData.textContent.push('')
    },
    deleteText (idx) {
      this.listData.textContent.splice(idx, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.edit-text {
  font-size: 32rpx;
  color: #1d1d1d;
  padding: 0 20rpx;

  > .edit-text-content {
    display: flex;
    align-items: flex-start;
    padding: 20rpx 20rpx 20rpx 0;

    > .content-index {
      line-height: 40rpx;
    }

    > .content {
      flex: 1;
      line-height: 42rpx;
    }

    > .iconfont {
      font-size: 40rpx;
      line-height: 40rpx;

      &.icon-delete {
        color: #ad7e7e;
      }
    }
  }
}
</style>