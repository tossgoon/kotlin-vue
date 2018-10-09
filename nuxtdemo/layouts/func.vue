<template>
  <div>
    <m-nav/>
    <b-container fluid>
      <b-row class="flex-xl-nowrap2">
        <b-col
          cols="12"
          md="3"
          xl="2"
          class="bd-sidebar">
          <m-sidebar/>
        </b-col>

        <b-col
          cols="12"
          md="9"
          xl="8"
          class="pb-md-3 pl-md-5 bd-content">
          <b-button-group class="my-2 float-right">
            <b-btn
              :href="issueURL"
              size="sm"
              variant="light"
              target="_blank">Report an issue
            </b-btn>
            <b-btn
              :href="editPageURL"
              size="sm"
              variant="light"
              target="_blank">Edit this page
            </b-btn>
          </b-button-group>

          <nuxt/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import mSidebar from '~/docs/components/SideBar.vue'
import mNav from '~/docs/components/NavBar.vue'
import mFooter from '~/docs/components/Footer.vue'

export default {
  components: { mSidebar, mNav, mFooter },
  computed: {
    editPageURL() {
      const base = 'https://github.com/bootstrap-vue/bootstrap-vue/tree/dev'
      let path = '/'
      const name = this.$route.name
      const slug = this.$route.params.slug
      if (name === 'docs') {
        path = `/docs/markdown/intro/README.md`
      } else if (name === 'docs-components-slug') {
        path = `/src/components/${slug}/README.md`
      } else if (name === 'docs-directives-slug') {
        path = `/src/directives/${slug}/README.md`
      } else if (name === 'docs-reference-slug') {
        path = `/docs/markdown/reference/${slug}/README.md`
      } else if (name === 'docs-misc-slug') {
        if (slug === 'changelog') {
          path = `/CHANGELOG.md`
        } else if (slug === 'contributing') {
          path = `/CONTRIBUTING.md`
        }
      }
      return base + path
    },
    issueURL() {
      // Add appreciate query params for proper issue title
      return 'https://github.com/bootstrap-vue/bootstrap-vue/issues/new?title=Docs'
    }
  }
}
</script>
