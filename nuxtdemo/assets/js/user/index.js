export default {
  name: '',
  layout: 'func',
  async asyncData({ route, app }) {
    let res = await app.$axios.get(app.$api.user.list)
    return {
      fields: ['id', 'name', 'age', 'phone', 'show'],
      items: res.data
    }
  },
  methods: {
    showDetail(id) {
      this.$router.push({ path: '/user/add', query: { id: id } })
    }
  }
}
