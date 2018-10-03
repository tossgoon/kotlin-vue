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
    const url = this.URL_CONFIG.urlList().user.getUser
    this.$http({
      method: 'post',
      url: url
    }).then(function (res) {
      console.log(res.data.name)
      console.log(res.data.age)
    }).catch(function (error) {
      console.log(error.toString())
    })
  }
}
</script>

<style>
</style>
