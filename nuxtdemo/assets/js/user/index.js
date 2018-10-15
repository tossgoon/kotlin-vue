export default {
  layout: 'func',
  methods: {
    showDetail: function(id) {
      this.$router.push({ path: '/user/add', query: { id: id } })
    }
  }
}
