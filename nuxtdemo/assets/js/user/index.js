export default {
  name: '',
  layout: 'func',
  async asyncData({ route, app }) {
    let res = await app.$axios.get(app.$api.user.list)
    return {
      items: res.data
    }
  }
}
