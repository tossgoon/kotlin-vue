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
      dismissCountDown: 0,
      dismissSecs: 5
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
      dismissCountDown: 0,
      dismissSecs: 5
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      let that = this
      let userJson = JSON.stringify(this.form)
      this.$axios
        .get(this.$api.user.add, {
          params: { userJson: userJson }
        })
        .then(function(res) {
          alert(res)
          that.dismissCountDown = 5
        })
    },
    onReset(evt) {
      evt.preventDefault()
      this.form.id = ''
      this.form.name = ''
      this.form.age = ''
      this.form.phone = ''
      this.show = false
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    test() {
      alert(this.$testGlobalName)
      Vue.test
    }
  }
}
