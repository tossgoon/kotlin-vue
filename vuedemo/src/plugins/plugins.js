import Vue from 'vue'

import test from './test/test'
import http from './http/http.js'
import pagination from './pagination/BootstrapPagination.js'

export { test, http, pagination }

import '../plugins/validate/validator.js'
import '../plugins/pagination/index.js'

import * as plugins from '../plugins/plugins.js'

for (let plugin in plugins) {
  Vue.use(plugins[plugin])
}
<<<<<<< HEAD

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
=======
>>>>>>> aa33488623aad5f6435721d80ee4082aae8c968b
