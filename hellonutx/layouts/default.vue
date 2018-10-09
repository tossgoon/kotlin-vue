<template>
  <div class="bd-home">
    <mNav/>
    <nuxt/>
    <mFooter/>
  </div>
</template>

<script>
import mNav from '../components/nav.vue'
import mFooter from '../components/footer.vue'

export default {
  components: { mNav, mFooter }
}
</script>
