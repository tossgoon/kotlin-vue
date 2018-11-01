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
