export default {
  name: 'TestPlugin',
  install: function(Vue, options) {
    // 1. 添加全局方法或属性
    Vue.testGlobalMethod = function() {
      alert('test global method plugin')
    }

    Vue.prototype.$testGlobalName = 'wangyu'

    // 2. 添加全局资源
    /*Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
    }
    ...
  })*/

    // 3. 注入组件
    /*Vue.mixin({
    created: function () {
      // 逻辑...
    }
    ...
  })
*/
    // 4. 添加实例方法
    Vue.prototype.$myMethod = function(methodOptions) {
      alert(methodOptions)
    }
  }
}
