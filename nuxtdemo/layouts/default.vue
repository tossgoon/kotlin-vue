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
import navBar from '~/components/Navbar.vue'
import mFooter from '~/components/Footer.vue'
import mSidebar from '~/components/Sidebar.vue'

export default {
  components: { navBar, mFooter, mSidebar }
}
</script>
