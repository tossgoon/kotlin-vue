export default {
  name: 'BootstrapPagination',
  data() {
    return {
      isBusy: false,
      totalRows: 0
    }
  },
  props: {
    fields: {
      type: Array,
      default: false
    },
    items: {
      type: String,
      default: ''
    },
    currentPage: {
      type: Number,
      default: 1
    },
    perPage: {
      type: Number,
      default: 10
    },
    pageIndex: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 10
    },
    filter: {
      type: String,
      default: ''
    },
    detailUrl: {
      type: String,
      default: ''
    },
    pageUrl: {
      type: String,
      default: ''
    },
    deleteUrl: {
      type: String,
      default: ''
    }
  },
  methods: {
    detail: function(id) {
      this.$router.push({ path: this.detailUrl, query: { id: id } })
    },
    deleteObj: function(id) {
      let that = this
      this.$HttpPost(that.deleteUrl, { id: id }, function() {
        that.$refs.userTable.refresh()
      })
    },
    myProvider: async function() {
      this.pageIndex = this.currentPage - 1
      let data = await this.$httpAwait(this.pageUrl, {
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      })
      this.totalRows = data.totalRows
      return data.items || []
    }
  }
}
