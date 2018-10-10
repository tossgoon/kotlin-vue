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
              target="_blank">Hard Work
            </b-btn>
            <b-btn
              :href="editPageURL"
              size="sm"
              variant="light"
              target="_blank">Happy Life
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
  data: function() {
    return {
      issueURL: 'http://www.huangyukeji.com',
      editPageURL: 'http://www.huangyukeji.com'
    }
  }
}
</script>
