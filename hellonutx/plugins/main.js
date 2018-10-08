import Vue from 'vue'
import Api from '~/assets/js/api/api.js'
import axios from 'axios'

let main = {
  install(Vue) {
    Vue.prototype.$api = Api
    Vue.prototype.$axios = axios
  }
}
Vue.use(main)

export default ({ app }, inject) => {
  app.$api = Api
  app.$axios = axios
}
