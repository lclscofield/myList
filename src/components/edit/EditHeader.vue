<template>
  <div class="edit-header"></div>
</template>

<script>
export default {
  name: 'EditHeader',
  props: {
    title: {
      type: String,
      default: ''
    },
    editType: {
      type: String,
      default: 'edit'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>