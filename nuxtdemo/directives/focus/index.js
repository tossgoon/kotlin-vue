import focus from './focusDriective'
import { registerDirectives, vueUse } from '~/utils/plugins.js'

const directives = {
  focus
}

const VuePlugin = {
  install(Vue) {
    registerDirectives(Vue, directives)
  }
}

vueUse(VuePlugin)

export default VuePlugin
