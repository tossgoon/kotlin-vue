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

import * as directives from '~/directives'
let directivePlugins = {
  install: function(Vue) {
    for (let plugin in directives) {
      Vue.use(directives[plugin])
    }
  }
}
Vue.use(directivePlugins)

import test from './test/test.js'
Vue.use(test)

export default ({ app }, inject) => {
  app.$api = Api
}
