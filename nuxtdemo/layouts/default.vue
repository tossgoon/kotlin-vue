<template>
  <div class="bd-home">
    <navBar/>
    <br>
    <nuxt/>
    <br>
    <mFooter/>
    <br>
    <mSidebar/>
  </div>
</template>

<script>
import navBar from '~/docs/components/Navbar.vue'
import mFooter from '~/docs/components/Footer.vue'
import mSidebar from '~/docs/components/Sidebar.vue'

export default {
  components: { navBar, mFooter, mSidebar }
}
</script>
