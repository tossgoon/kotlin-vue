<template>
  <b-collapse
    id="bd-docs-nav"
    tag="nav"
    is-nav
    class="bd-links">
    <router-link
      v-for="group in subNav"
      :key="group.base"
      :to="group.base"
      :exact="group.exact"
      active-class="active"
      class="bd-toc-item"
      tag="div">

      <router-link
        :to="group.base"
        exact
        class="bd-toc-link">
        {{ group.title }}
        <small
          v-if="group.new"
          class="badge badge-success">NEW
        </small>
        <small
          v-if="group.experimental"
          class="badge badge-warning">BETA
        </small>
        <small
          v-if="group.breaking"
          class="badge badge-danger">BREAKING CHANGE
        </small>
      </router-link>

      <b-nav class="bd-sidenav">
        <b-nav-item
          v-for="page in group.pages"
          :to="(group.base + page.slug).replace(/\/\//g,'/')"
          :key="page.title"
          exact
          class="bd-toc-link">
          {{ page.title }}
          <b-badge
            v-if="page.new"
            tag="small"
            variant="success">NEW
          </b-badge>
          <b-badge
            v-if="page.experimental"
            tag="small"
            variant="warning">BETA
          </b-badge>
          <b-badge
            v-if="page.breaking"
            tag="small"
            variant="danger">CHANGE
          </b-badge>
          <b-badge
            v-if="page.features"
            tag="small"
            variant="info">ENHANCED
          </b-badge>
        </b-nav-item>
      </b-nav>

    </router-link>
  </b-collapse>
</template>

<script>
import { subNav } from '../assets/js/common/menu.js'

export default {
  computed: {
    subNav: () => subNav
  }
}
</script>

<style scoped>
.bd-sidebar .nav > li > a.active {
  /*color: #0275d8;*/
  color: black;
  font-weight: bold;
}
</style>
