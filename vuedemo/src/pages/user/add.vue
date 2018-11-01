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
        @submit="onSubmit"
        @reset="onReset">
        <b-form-input
          v-show="false"
          id="txtId"
          v-model="form.id"
          type="text"/>
        <b-form-group
          id="exampleInputGroup1"
          label="Your Name:"
          label-for="txtName"
          description="User's name and phone is unique">
          <b-form-input
            v-focus
            v-validate="'required|email'"
            id="txtName"
            v-model="form.name"
            name="txtName"
            type="text"
            placeholder="Enter name"/>
          <span>{{ errors.first('txtName') }}</span>
        </b-form-group>
        <b-form-group
          id="exampleInputGroup2"
          label="Your Age:"
          label-for="txtAge">
          <b-form-input
            id="txtAge"
            v-model="form.age"
            type="text"
            placeholder="Enter age"/>
        </b-form-group>
        <b-form-group
          id="exampleInputGroup3"
          label="Your Phone Num:"
          label-for="txtPhone">
          <b-form-input
            id="txtPhone"
            v-model="form.phone"
            placeholder="Enter phone num"/>
        </b-form-group>
        <b-alert
          :show="dismissCountDown"
          dismissible
          variant="warning"
          @dismissed="dismissCountDown=0"
          @dismiss-count-down="countDownChanged"
          @close="closeFunc">
          <p>Save successful, page will location to list after {{ dismissCountDown }} seconds...</p>
          <b-progress
            :max="dismissSecs"
            :value="dismissCountDown"
            variant="warning"
            height="4px"/>
        </b-alert>
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
