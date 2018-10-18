<template>
  <div class="container">
    <header>
      <slot name="1"/>
    </header>
    <main>
      <slot/>
    </main>
    <footer>
      <slot name="2"/>
    </footer>
  </div>
</template>

<script>
export default {
  name: ''
}
</script>

<style scoped>
</style>
