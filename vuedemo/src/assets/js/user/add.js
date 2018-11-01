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
      dismissSecs: 5,
    }
  },
  created: function() {
    let getId = this.$route.query.id
    if (!getId) {
      this.clear() // TODO
      return
    }

    this.getDetail(getId).then(user => {
      this.form.id = user.id
      this.form.name = user.name
      this.form.age = user.age
      this.form.phone = user.phone
    })
  },
  methods: {
    getDetail: async function(getId) {
      let user = this.$httpAwait(this.$api.user.get, {
        id: getId
      })
      return user
    },
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
      this.clear()
    },
    clear() {
      this.form.id = ''
      this.form.name = ''
      this.form.age = ''
      this.form.phone = ''
      this.show = false
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
      this.$router.push({ path: '/user/index' }) // TODO 添加 alert close 后事件
    },
    test() {
      alert(this.$testGlobalName)
    },
    closeFunc() {
      alert('close 掉了')
    }
  }
}
