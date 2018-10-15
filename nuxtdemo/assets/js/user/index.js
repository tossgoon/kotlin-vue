export default {
  layout: 'func',
  data() {
    return {
      isBusy: false,
      fields: [],
      items: [],
      currentPage: 1,
      perPage: 10,
      totalRows: 20,
      pageIndex: this.$pageIndex,
      pageSize: this.$pageSize,
      filter: null
    }
  },
  methods: {
    showDetail: function(id) {
      this.$router.push({ path: '/user/add', query: { id: id } })
    },
    myProvider: async function() {
      this.pageIndex = this.currentPage - 1
      let res = await this.$axios.get(this.$api.user.page, {
        params: {
          pageIndex: this.pageIndex,
          pageSize: this.pageSize
        }
      })
      return res.data.items || []
    }
  },
  mounted() {}
}
