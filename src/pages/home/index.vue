<template>
  <div class="home">
    <div class="home-header" @click="switchLimit">
      <div class="home-header-title">{{ currentTitle }}</div>
      <i class="iconfont icon-other"></i>
    </div>
    <List></List>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import List from '../../components/List'

export default {
  name: 'Home',

  components: {
    List
  },

  data () {
    return {
      currentIndex: 0,
      page: 1,
      titles: ['最近一周', '最近一月', '未完成', '已完成'],
      limitType: ['week', 'month', 'none', 'done']
    }
  },

  computed: {
    currentTitle () {
      return this.titles[this.currentIndex]
    }
  },

  // 下拉刷新
  async onPullDownRefresh () {
    this.page = 1
    await this.getListArr('noAdd', true)
  },

  mounted () {
    Object.assign(this.$data, this.$options.data())
    this.getListArr()
  },

  methods: {
    ...mapActions({
      apiGetList: 'apiGetList'
    }),
    // 切换清单数据显示限制类型
    switchLimit () {
      wx.showActionSheet({
        itemList: this.titles,
        success: res => {
          this.currentIndex = res.tapIndex
          wx.startPullDownRefresh()
        }
      })
    },
    // 获取清单列表数据
    async getListArr (isAdd, isPull = false) {
      !isPull && wx.showLoading({
        title: '加载中...',
        mask: true
      })

      const res = await this.apiGetList({
        limitType: this.limitType[this.currentIndex],
        page: this.page
      }, isAdd)

      isPull ? wx.stopPullDownRefresh() : wx.hideLoading()

      if (!res) {
        wx.showToast({
          title: '加载失败，请下拉重试',
          icon: 'none'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  font-size: 32rpx;
  color: #1d1d1d;

  > .home-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    height: 100rpx;
    border-bottom: 2rpx solid #d8d8d8;
    padding: 0 40rpx;
    color: #70b7b7;

    > .iconfont {
      font-size: 60rpx;
    }
  }
}
</style>
