<template>
  <div class="bd-home">
    <mNav/>
    <mSideBar/>
    <nuxt/>
    <mFooter/>
  </div>
</template>

<script>
import mNav from '../components/nav.vue'
import mFooter from '../components/footer.vue'
import mSideBar from '../components/sidebar.vue'

export default {
  components: { mNav, mFooter, mSideBar }
}
</script>
