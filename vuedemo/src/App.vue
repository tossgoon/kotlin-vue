<template>
  <div id="app">
    <mHeader/>
    <router-view/>
    <mFooter/>
  </div>
</template>

<script>
import mHeader from './layouts/header.vue'
import mFooter from './layouts/footer.vue'

export default {
  name: 'App',
  components: { mHeader, mFooter }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
