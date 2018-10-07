export default {
  name: 'UserIndex',
  data () {
    return {
      msg: 'Hello Index',
      baiduUrl: 'http://www.baidu.com',
      showButton: true,
      status: 1,
      books: [
        {name: 'first'},
        {name: 'second'},
        {name: 'third'}
      ],
      bookIndex: 1
    }
  },
  methods: {
    reversedText22: function () {
      return this.msg + '222222222222'
    },
    showOrHideButton: function () {
      this.showButton = !this.showButton
    },
    addBook: function () {
      this.books.push({
        name: '我是新加的书' + this.bookIndex
      })
      ++this.bookIndex
    }
  },
  computed: {
    reversedText: function () {
      return this.msg + '123456778'
    }
  },
  mounted: function () {
    this.$refs.txt1.value = 'test'
    this.directive('focus', {
      inserted: function (el) {
        el.focus()
      }
    })
  }
}

/*
fun () {
  const url = this.URL_CONFIG.urlList().user.get
  this.$http({
    method: 'post',
    url: url
  }).then(function (res) {
    console.log(res.data.name)
    console.log(res.data.age)
  }).catch(function (error) {
    console.log(error.toString())
  })
}
*/
