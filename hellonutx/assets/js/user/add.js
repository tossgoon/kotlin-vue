export default {
  async asyncData({ route, app }) {
    let getId = route.query.id
    let res = await app.$axios.get(app.$api.user.get, {
      params: { id: getId }
    })
    return {
      id: res.data.id,
      name: res.data.name
    }
  },
  methods: {},
  mounted() {}
}
