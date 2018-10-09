<template>
  <div class="bd-home">
    <mNavBar/>
    <br>
    <nuxt/>
    <br>
    <mFooter/>
  </div>
</template>

<script>
import mNavBar from '~/docs/components/NavBar.vue'
import mFooter from '~/docs/components/Footer.vue'

export default {
  components: { mNavBar, mFooter }
}
</script>
