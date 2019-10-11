<template>
  <div class="home">
    <div v-if="loginType">123</div>
    <!-- 没登录就进入试用页 -->
    <Probation v-else></Probation>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Probation from '../../components/Probation'

export default {
  components: {
    Probation
  },
  computed: {
    ...mapGetters({
      loginType: 'getLoginType'
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
