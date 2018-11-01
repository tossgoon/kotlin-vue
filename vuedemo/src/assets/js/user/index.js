export default {
  data() {
    return {
      pageUrl: this.$api.user.page,
      detailUrl: '/user/add',
      deleteUrl: this.$api.user.del
    }
  }
}
