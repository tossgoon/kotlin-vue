import Vue from 'vue'

import Api from './api/api.js'
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

import * as plugins from './plugins.js'
for (let plugin in plugins) {
  Vue.use(plugins[plugin])
}

export default ({ app }, inject) => {
  app.$api = Api
}
