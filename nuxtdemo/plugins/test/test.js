export default {
  name: 'TestPlugin',
  install: function(Vue, options) {
    // 1. 添加全局方法或属性
    // 暂时发现必须 import vue from 'vue' 方可 使用 vue.testGlobalMethod() 故可以使用 4.添加实例方法进行定义全局方法
    Vue.testGlobalMethod = function() {
      alert('test global method plugin')
    }

    Vue.prototype.$testGlobalName = 'wangyu'

    // 2. 添加全局资源
    Vue.directive('my-focus', {
      inserted: function(el) {
        el.focus()
      }
    })

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
