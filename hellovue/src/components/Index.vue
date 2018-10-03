<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Hello Index'
    }
  },
  created: function () {
    alert(this.URL_CONFIG.urlList().user.getUser)
    const url = '/user/get'
    this.$http({
      method: 'post',
      url: url
    }).then(function (res) {
      console.log(res.data.name)
      console.log(res.data.age)
    }).catch(function (error) {
      alert(error)
    })
  }
}
</script>

<style>
</style>
