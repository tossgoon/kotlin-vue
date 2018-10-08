export default {
  async asyncData({ route, app }) {
    let getId = route.query.id
    let res = await app.$axios.get(app.$api.user.get)
    return { name: res.data.name }
  },
  methods: {
    changeName(name) {
      name = name + 'change'
    }
  },
  mounted() {}
}
