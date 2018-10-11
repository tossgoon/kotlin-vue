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
