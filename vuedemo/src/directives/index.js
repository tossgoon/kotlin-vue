import Focus from './focus'

export { Focus }

import Vue from 'vue'
import * as directives from '../directives'

let directivePlugins = {
  install: function(Vue) {
    for (let plugin in directives) {
      Vue.use(directives[plugin])
    }
  }
}
Vue.use(directivePlugins)
