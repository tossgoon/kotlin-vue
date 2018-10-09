<template>
  <b-collapse
    id="bd-docs-nav"
    tag="nav"
    is-nav
    class="bd-links"
  >
    <router-link
      v-for="group in nav"
      :key="group.base"
      :to="'/docs/' + group.base"
      :exact="group.exact"
      tag="div"
      class="bd-toc-item"
      active-class="active">

      <router-link
        :to="'/docs/' + group.base"
        :exact="group.exact"
        class="bd-toc-link">
        {{ group.title }}
        <small
          v-if="group.new"
          class="badge badge-success">NEW
        </small>
        <small
          v-if="group.experimental"
          class="badge badge-warning"
        >BETA
        </small>
        <small
          v-if="group.breaking"
          class="badge badge-danger"
        >BREAKING CHANGE
        </small>
      </router-link>

      <b-nav class="bd-sidenav">
        <b-nav-item
          v-for="page in group.pages"
          :to="('/docs/' + group.base + page.slug).replace(/\/\//g,'/')"
          :key="page.title">
          {{ page.title }}
          <b-badge
            v-if="page.new"
            tag="small"
            variant="success"
          >NEW
          </b-badge>
          <b-badge
            v-if="page.experimental"
            tag="small"
            variant="warning"
          >BETA
          </b-badge>
          <b-badge
            v-if="page.breaking"
            tag="small"
            variant="danger"
          >CHANGE
          </b-badge>
          <b-badge
            v-if="page.features"
            tag="small"
            variant="info"
          >ENHANCED
          </b-badge>
        </b-nav-item>
      </b-nav>

    </router-link>
  </b-collapse>
</template>

<style>
.bd-sidebar .nav > li > a.active {
  /*color: #0275d8;*/
  color: black;
  font-weight: bold;
}
</style>

<script>
// import { nav } from '~/pages/content'

export default {
  computed: {
    nav: [
      {
        title: 'Getting started',
        base: ''
      },
      {
        title: 'Components',
        base: 'components/',
        pages: components
      },
      {
        title: 'Directives',
        base: 'directives/',
        pages: directives
      },
      {
        title: 'Reference',
        base: 'reference/',
        pages: reference
      },
      {
        title: 'Misc',
        base: 'misc/',
        pages: misc
      }
    ]
  }
}
</script>
