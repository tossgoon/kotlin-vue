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
    let data = app.$axios.get('http://localhost:8078/user/get?id=' + getId)
    console.log(data)
    return {
      id: data.id,
      name: data.name,
      age: data.age
    }
  },
  created() {
    // console.log('jjjjjjjjjjjjj' + this.id)
  }
}
