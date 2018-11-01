<script src="../../assets/js/user/index.js">
</script>
<template>
  <div>
    <h1>user list</h1>
    <bootstrapPagination
      :fields="fields"
      :page-url="pageUrl"
      :detail-url="detailUrl"
      :delete-url="deleteUrl"/>
  </div>
</template>
