<script src="../../assets/js/user/index.js">
</script>
<template>
  <div>
    <h1>user list</h1>
    <b-table
      :items="items"
      :fields="fields">

      <template
        slot="show"
        slot-scope="row">
        <b-button
          size="sm"
          class="mr-2"
          @click="showDetail">
          Details
        </b-button>
      </template>

    </b-table>
  </div>
</template>
