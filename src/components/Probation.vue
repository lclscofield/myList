<template>
  <div class="probation">
    <image class="probation-list-img" mode="widthFix" src="/static/images/probation-list.png"></image>
    <div class="probation-desc">自律的人更自由！</div>
    <mp-button type="primary" size="large" @click="toListEdit">创建清单</mp-button>
  </div>
</template>

<script>
import mpButton from 'mpvue-weui/src/button'

export default {
  name: 'Probation',
  components: {
    mpButton
  },
  methods: {
    toListEdit () {
      wx.navigateTo({
        url: '../list_edit/main?listType=probation'
      })
    }
  }
}
</script>


<style lang="scss" scoped>
.probation {
  display: flex;
  flex-direction: column;
  align-items: center;

  .probation-list-img {
    margin: 140rpx 0 60rpx;
    width: 80%;
    border-radius: 8rpx;
  }

  .probation-desc {
    color: #6d7575;
    margin-bottom: 60rpx;
  }

  /deep/ button {
    width: 60%;
    background-color: #70b7b7;
  }
}
</style>