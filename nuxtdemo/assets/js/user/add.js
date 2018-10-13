export default {
  layout: 'func',
  data() {
    return {
      form: {
        id: '',
        name: '',
        age: '',
        phone: ''
      },
      show: true
    }
  },
  async asyncData({ route, app }) {
    let getId = route.query.id
    if (!getId) return
    let res = await app.$axios.get(app.$api.user.get, {
      params: { id: getId }
    })
    return {
      form: {
        id: res.data.id,
        name: res.data.name,
        age: res.data.age,
        phone: res.data.phone
      },
      show: true
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      let userJson = JSON.stringify(this.form)
      this.$axios.get(this.$api.user.add, {
        params: { userJson: userJson }
      })
    },
    onReset(evt) {
      evt.preventDefault()
      this.form.id = ''
      this.form.name = ''
      this.form.age = ''
      this.form.phone = ''
      this.show = true
    }
  }
}
