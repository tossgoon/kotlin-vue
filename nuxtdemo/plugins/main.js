import Vue from 'vue'
import Api from '~/assets/js/api/api.js'
import BootstrapPagination from '../docs/components/pagination/BootstrapPagination.vue'

let main = {
  install(Vue) {
    Vue.prototype.$api = Api
    Vue.component('BootstrapPagination', BootstrapPagination)
  }
}
Vue.use(main)

export default ({ app }, inject) => {
  app.$api = Api
}
