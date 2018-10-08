import http from '~/assets/js/api/http.js'
import Api from '~/assets/js/api/api.js'

export default {
  name: '',
  data() {
    return {
      id: '1',
      name: '2',
      age: '3'
    }
  },
  asyncData({ route, app }) {
    let getId = route.query.id
    http(Api.getUser, { id: 1 }).then(
      res => {
        console.log(res)
      },
      error => {
        console.log(error)
      }
    )
  },
  created() {}
}
