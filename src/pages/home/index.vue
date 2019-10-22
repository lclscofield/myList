<template>
  <div class="home">
    <List v-if="loginType && !loading"></List>
    <!-- 没登录就进入试用页 -->
    <Probation v-else></Probation>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Probation from '../../components/Probation'
import List from '../../components/List'

export default {
  name: 'Home',
  components: {
    Probation,
    List
  },
  computed: {
    ...mapGetters({
      loginType: 'getLoginType',
      loading: 'getLoading'
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
