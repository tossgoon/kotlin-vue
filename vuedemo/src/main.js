// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/docs.min.css'
import './assets/css/styles.css'

import * as directives from './directives'
let directivePlugins = {
  install: function(Vue) {
    for (let plugin in directives) {
      Vue.use(directives[plugin])
    }
  }
}
Vue.use(directivePlugins)

import Api from './plugins/api/api.js'
let main = {
  install(Vue) {
    Vue.prototype.$api = Api
    Vue.prototype.$axios = axios
  }
}
Vue.use(main)

import * as plugins from './plugins/plugins.js'
for (let plugin in plugins) {
  Vue.use(plugins[plugin])
}

export default ({ app }, inject) => {
  app.$api = Api
}

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
