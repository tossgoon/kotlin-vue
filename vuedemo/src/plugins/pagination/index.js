import BootstrapPagination from './BootstrapPagination.vue'
import Vue from 'vue'

BootstrapPagination.install = function(Vue) {
  //console.log(options.testId)
}

export default BootstrapPagination

Vue.config.productionTip = false
Vue.component(BootstrapPagination.name, BootstrapPagination)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/css/docs.min.css'
import '@/assets/css/styles.css'
