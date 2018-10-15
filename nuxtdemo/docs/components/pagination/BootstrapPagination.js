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
      filter: null
    }
  },
  install(Vue, options) {
    Vue.mixin({
      methods: {
        showDetail: function(id) {
          alert(id)
        }
      }
    })
  },
  methods: {
    myProvider: async function() {
      this.pageIndex = this.currentPage - 1
      let res = await this.$axios.get(this.$api.user.page, {
        params: {
          pageIndex: this.pageIndex,
          pageSize: this.pageSize
        }
      })
      this.totalRows = res.data.totalRows
      return res.data.items || []
    }
  }
}
