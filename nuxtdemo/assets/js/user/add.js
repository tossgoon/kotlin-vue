export default {
  layout: 'func',
  data() {
    return {
      form: {
        name: '',
        age: '',
        phone: ''
      },
      show: true
    }
  },
  /*  async asyncData({ route, app }) {
    let getId = route.query.id
    let res = await app.$axios.get(app.$api.user.get, {
      params: { id: getId }
    })
    console.log(res.data.name + '--------------------------')
    return {
      id: res.data.id,
      name: res.data.name
    }
  },*/
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      let userJson = JSON.stringify(this.form)
      let res = this.$axios.get(this.$api.user.add, {
        params: { user: userJson }
      })
      alert(res)
    },
    onReset(evt) {
      evt.preventDefault()
      this.form.name = ''
      this.form.age = ''
      this.form.phone = ''
      this.show = true
    }
  }
}
