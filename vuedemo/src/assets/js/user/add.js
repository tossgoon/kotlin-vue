export default {
  layout: 'func',
  data () {
    return {
      form: {
        id: '',
        name: '',
        age: '',
        phone: '',
        carList: ''
      },
      fields: ['index', 'brand', 'name', 'operate'],
      items: [],
      dismissCountDown: 0,
      dismissSecs: 5
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

      for (let key in user.carList) {
        this.addRow(user.carList[key])
      }

    })
  },
  methods: {
    getDetail: async function(getId) {
      let user = this.$httpAwait(this.$api.user.get, {
        id: getId
      })
      return user
    },
    onSubmit (evt) {
      let that = this
      evt.preventDefault()
      this.$validator.validateAll().then(validate => {
        if (validate) {
          that.form.carList = that.items
          let userJson = JSON.stringify(that.form)
          that.$HttpPost(that.$api.user.add, { userJson: userJson }, function(
            res
          ) {
            console.log(res)
            that.dismissCountDown = 5
          })
        }
      })
    },
    onReset (evt) {
      evt.preventDefault()
      this.clear()
    },
    clear () {
      this.form.id = ''
      this.form.name = ''
      this.form.age = ''
      this.form.phone = ''
      this.show = false
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
      this.$router.push({ path: '/user/index' }) // TODO 添加 alert close 后事件
    },
    addRow (data) {
      this.items.push(data)
    },
    deleteRow (item) {
      let index = this.items.indexOf(item)
      this.items.splice(index, 1)
    },
    showModal () {
      this.$refs.txtBrand.value = ''
      this.$refs.txtName.value = ''
      this.$refs.myModalRef.show()
    },
    hideModal () {
      let brand = this.$refs.txtBrand
      let name = this.$refs.txtName
      if (!brand.value && !name.value) {
        alert('please input brand and name')
        return
      }
      let data = { brand: brand.value, name: name.value }
      this.addRow(data)
      this.$refs.myModalRef.hide()
    }
  }
}
