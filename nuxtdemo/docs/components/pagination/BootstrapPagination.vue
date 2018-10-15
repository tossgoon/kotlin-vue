<template>
  <div>
    <b-table
      id="table_user"
      :busy.sync="isBusy"
      :items="myProvider"
      :fields="fields"
      :per-page="perPage"
      :current-page="currentPage"
      show-empty>
      <template
        slot="show"
        slot-scope="row">
        <b-button
          size="sm"
          class="mr-2"
          @click="showDetail(row.item.id)">
          Details
        </b-button>
      </template>
    </b-table>
    <b-row>
      <b-col
        md="6"
        class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          class="my-0"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'BootstrapPagination',
  data() {
    return {
      fields: ['id', 'name', 'age', 'phone', 'show'],
      isBusy: false,
      items: [],
      currentPage: 1,
      perPage: 10,
      totalRows: 0,
      pageIndex: 0,
      pageSize: 10,
      filter: null
    }
  },
  methods: {
    myProvider: async function() {
      this.pageIndex = this.currentPage - 1
      let res = await this.$axios.get(this.$api.user.page, {
        params: {
          pageIndex: this.pageIndex,
          pageSize: this.pageSize
        }
      })
      this.totalRows = res.data.totalRows
      return res.data.items || []
    }
  }
}
</script>

<style scoped>
</style>
