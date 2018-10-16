import Vue from 'vue'
import Api from '~/assets/js/api/api.js'
import BootstrapPagination from '../docs/components/pagination/index.js'

let main = {
  install(Vue) {
    Vue.prototype.$api = Api
    Vue.component(BootstrapPagination.name, BootstrapPagination)
  }
}
Vue.use(main)

export default ({ app }, inject) => {
  app.$api = Api
}
