<template>
  <div>
    <mHeader/>
    <b-container fluid>
      <b-row class="flex-xl-nowrap2">
        <b-col
          cols="12"
          md="3"
          xl="2"
          class="bd-sidebar">
          <mSideBar/>
        </b-col>
        <b-col
          cols="12"
          md="9"
          xl="8"
          class="pb-md-3 pl-md-5 bd-content">
          <div class="clearfix">
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
          </div>
          <router-view/>
        </b-col>
      </b-row>
    </b-container>
    <!--mFooter/-->
  </div>
</template>

<script>
import mHeader from './layouts/header.vue'
import mFooter from './layouts/footer.vue'
import mSideBar from './layouts/sidebar.vue'

export default {
  name: 'App',
  components: { mHeader, mFooter, mSideBar },
  data: function() {
    return {
      issueURL: 'http://www.huangyukeji.com',
      editPageURL: 'http://www.huangyukeji.com'
    }
  }
}
</script>
