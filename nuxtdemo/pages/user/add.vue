<script src="../../assets/js/user/add.js">
</script>
<template>
  <div>
    <h1>user add</h1>
    <main
      id="content"
      class="bd-content"
      role="main">
      <b-form
        v-if="show"
        @submit="onSubmit"
        @reset="onReset">
        <b-form-group
          id="exampleInputGroup1"
          label="Your Name:"
          label-for="exampleInput1"
          description="User's name and phone is unique">
          <b-form-input
            id="txtName"
            v-model="form.name"
            type="text"
            required
            placeholder="Enter name"/>
        </b-form-group>
        <b-form-group
          id="exampleInputGroup2"
          label="Your Age:"
          label-for="exampleInput2">
          <b-form-input
            id="txtAge"
            v-model="form.age"
            type="text"
            placeholder="Enter age"/>
        </b-form-group>
        <b-form-group
          id="exampleInputGroup3"
          label="Your Phone Num:"
          label-for="exampleInput3">
          <b-form-input
            id="txtPhone"
            v-model="form.phone"
            required
            placeholder="Enter phone num"/>
        </b-form-group>
        <b-button
          type="submit"
          variant="primary">Submit
        </b-button>
        <b-button
          type="reset"
          variant="danger">Reset
        </b-button>
        <b-button
          type="button"
          variant="danger"
          @click="test">Test
        </b-button>
      </b-form>
    </main>
  </div>
</template>

<style scoped>
</style>
