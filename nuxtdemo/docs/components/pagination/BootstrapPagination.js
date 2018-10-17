export default {
  name: 'BootstrapPagination',
  data() {
    return {
      fields: ['id', 'name', 'age', 'phone', 'show'],
      isBusy: false,
      items: [],
      currentPage: 1,
      perPage: 10,
      totalRows: 0,
      pageIndex: 0,
      pageSize: 10,
      filter: null,
      detailUrl: '/user/add'
    }
  },
  methods: {
    showDetail: function(id) {
      this.$router.push({ path: this.detailUrl, query: { id: id } })
    },
    myProvider: async function() {
      this.pageIndex = this.currentPage - 1
      let data = await this.$httpAwait(this.$api.user.page, {
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      })
      this.totalRows = data.totalRows
      return data.items || []
    }
  }
}
