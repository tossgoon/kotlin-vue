// 返回状态code 0 网络错误 1 请求失败 2 成功
// TODO 封装 axios
export default {
  name: 'HttpPlugin',
  install: function(Vue, options) {
    Vue.prototype.$httpAwait = async function(url, params) {
      let res = await this.$axios.get(url, { params: params })
      let obj = res.data
      if (obj.code == 2) return res.data.data
      else alert(obj.message)
      return false
    }

    Vue.prototype.$HttpGet = function(url, params, callback) {
      this.$axios.get(url, { params: params }).then(response => {
        let obj = response.data
        if (obj.code == 2) callback(obj)
        else alert(obj.message)
        return false
      })
    }

    Vue.prototype.$HttpPost = function(url, params, callback) {
      this.$axios.get(url, { params: params }).then(response => {
        let obj = response.data
        if (obj.code == 2) callback(obj)
        else alert(obj.message)
        return false
      })
    }
  }
}
