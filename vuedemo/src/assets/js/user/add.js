export default {
  layout: 'func',
  data() {
    return {
      form: {
        id: '',
        name: 'dddddddddd',
        age: '',
        phone: ''
      },
      dismissCountDown: 0,
      dismissSecs: 5
    }
  },
  created: function() {
    let getId = this.$route.query.id
    if (!getId) return
    this.$httpAwait(this.$api.user.get, {
      id: getId
    }).then(user => {
      this.form.id = user.id
      this.form.name = user.name
      this.form.age = user.age
      this.form.phone = user.phone
    })
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      let that = this
      let userJson = JSON.stringify(this.form)
      this.$HttpPost(this.$api.user.add, { userJson: userJson }, function() {
        that.dismissCountDown = 5
      })
    },
    onReset(evt) {
      evt.preventDefault()
      this.form.id = ''
      this.form.name = ''
      this.form.age = ''
      this.form.phone = ''
      this.form.carList = ''
      this.show = false
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
      this.$router.push({ path: '/user' }) // TODO 添加 alert close 后事件
    },
    test() {
      alert(this.$testGlobalName)
    },
    closeFunc() {
      alert('close 掉了')
    }
  }
}
