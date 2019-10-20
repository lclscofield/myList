<template>
  <div class="edit-content-wrap">
    <div class="edit-content" :class="{ 'add-animation': idx === listData.textContent.length }" v-for="(item, idx) in listData.textContent" :key="idx + item.text">
      <div class="content-index">{{ idx + 1 }}、</div>
      <div class="content">
        <textarea class="content-text" :class="{ 'is-disabled': disabled }" :value="item.text" :disabled="disabled" auto-height :placeholder="disabled ? '' : '请输入清单内容'" @input="changeText($event, idx)" />
        <div class="content-imgs" v-if="item.imgs && item.imgs.length">
          <image class="content-img" mode="aspectFit" v-for="(img, imgIdx) in item.imgs" :key="imgIdx + img" :src="img" @click="previewImage(img)"></image>
        </div>
        </div>
      <div class="icon-wrap" v-if="!disabled">
        <i class="iconfont icon-camera" @click="getImg(item)"></i>
        <i class="iconfont icon-addition" v-if="idx === listData.textContent.length - 1" @click="addContent"></i>
        <i class="iconfont icon-delete" v-else @click="deleteContent(idx)"></i>
      </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'EditContent',
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
    // 改变文本
    changeText (e, idx) {
      this.listData.textContent[idx].text = e.mp.detail.value
    },
    // 添加内容条目
    addContent () {
      this.listData.textContent.push({
        text: '',
        imgs: []
      })
    },
    // 删除内容条目
    deleteContent (idx) {
      this.listData.textContent.splice(idx, 1)
    },
    // 选择图片或拍照
    getImg (item) {
      wx.chooseImage({
        success: res => {
          item.imgs.push(...res.tempFilePaths)
        }
      })
    },
    // 预览图片
    previewImage (img) {
      let imgs = []
      this.listData.textContent.forEach(item => {
        if (item.imgs && item.imgs.length) {
          imgs = imgs.concat(item.imgs)
        }
      })
      wx.previewImage({
        urls: imgs,
        current: img
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.edit-content-wrap {
  font-size: 32rpx;
  color: #1d1d1d;
  padding: 0 20rpx;

  // 动画
  // content 淡入
  @keyframes content {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  > .edit-content {
    position: relative;
    padding: 20rpx 0 20rpx;
    animation: content 0.3s linear;

    > .content-index {
      position: absolute;
      top: 30rpx;
      left: 0;
      width: 60rpx;
    }

    > .content {
      margin-left: 60rpx;

      > .content-text {
        width: 620rpx;
        padding: 10rpx;
        background-color: #e9f1f1;
        border-radius: 4rpx;
        line-height: 1.3;

        &.is-disabled {
          background-color: transparent;
        }
      }

      > .content-imgs {
        margin-top: 10rpx;
        display: flex;
        flex-wrap: wrap;

        > .content-img {
          width: 180rpx;
          height: 180rpx;
          margin: 10rpx 20rpx 0 0;
          border-radius: 2rpx;
          box-shadow: 0 0 4rpx 4rpx #e9f1f1;
          animation: content 0.3s linear;
        }
      }
    }

    > .icon-wrap {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 10rpx 10rpx 0 0;

      > .iconfont {
        font-size: 44rpx;

        &.icon-camera {
          margin-right: 20rpx;
        }

        &.icon-delete {
          color: #ad7e7e;
        }
      }
    }
  }
}
</style>