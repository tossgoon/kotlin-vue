export default {
  data() {
    return {
      fields: ['id', 'name', 'age', 'phone', 'operate'],
      pageUrl: this.$api.user.page,
      detailUrl: '/user/add',
      deleteUrl: this.$api.user.del
    }
  }
}
