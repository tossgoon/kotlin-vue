<template>
  <div class="bd-home">
    <navBar/>
    <br>
    <nuxt/>
    <br>
    <mFooter/>
  </div>
</template>

<script>
import navBar from '~/components/Navbar.vue'
import mFooter from '~/components/Footer.vue'

export default {
  components: { navBar, mFooter }
}
</script>
