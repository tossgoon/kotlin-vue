export default {
  name: 'HttpPlugin',
  install: function(Vue, options) {
    Vue.prototype.$httpAwait = async function(url, params) {
      let res = await this.$axios.get(url, {
        params: params
      })
      return res.data.data
    }
  }
}
