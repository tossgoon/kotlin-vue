import bFocus from './focusDriective'
import { registerDirectives, vueUse } from '~/utils/plugins.js'

const directives = {
  bFocus
}

const VuePlugin = {
  install(Vue) {
    registerDirectives(Vue, directives)
  }
}

vueUse(VuePlugin)

export default VuePlugin
