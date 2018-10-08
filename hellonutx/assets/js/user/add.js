import axios from 'axios'
import api from '~/assets/js/api/api.js'

export default {
  async asyncData({ route, app }) {
    let getId = route.query.id
    let res = await axios.get(api.user.get.url)
    return { name: res.data.name }
  },
  methods: {
    changeName(name) {
      name = name + 'change'
    }
  },
  mounted() {}
}
