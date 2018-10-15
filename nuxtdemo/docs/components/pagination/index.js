import BootstrapPagination from './BootstrapPagination.vue'

const pagination = {
  install: function(Vue) {
    Vue.component('BootstrapPagination', BootstrapPagination)
  }
}

export default pagination
