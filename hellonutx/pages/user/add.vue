<template>
  <div>
    {{ id }}
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return { id: '' }
  },
  asyncData({ route }) {
    return { id: route.query.id == null ? 1 : route.query.id }
  },
  created() {
    console.log('id============' + this.id)
  }
}
</script>

<style scoped>
</style>
