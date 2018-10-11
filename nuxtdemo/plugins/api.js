import Vue from 'vue'

let host = 'http://localhost:8078/'
const Api = {
  user: {
    get: host + 'user/get',
    add: host + 'user/add',
    del: host + 'user/del'
  }
}

Vue.prototype.$api = Api
